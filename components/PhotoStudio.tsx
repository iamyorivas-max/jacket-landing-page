
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Sparkles, X, Image as ImageIcon, Loader2 } from 'lucide-react';
import { Language, translations } from '../translations.ts';

interface PhotoStudioProps {
  lang: Language;
  isOpen: boolean;
  onClose: () => void;
  onImageGenerated: (url: string) => void;
}

const PhotoStudio: React.FC<PhotoStudioProps> = ({ lang, isOpen, onClose, onImageGenerated }) => {
  const t = translations[lang];
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;

    // Trigger API key selection if using Imagen or advanced models as per guidelines
    // @ts-ignore
    if (window.aistudio && !(await window.aistudio.hasSelectedApiKey())) {
      // @ts-ignore
      await window.aistudio.openSelectKey();
      // Guideline: Assume success after openSelectKey() call despite race conditions
    }

    setIsGenerating(true);
    
    try {
      // Guideline: Initialize client right before use to capture updated environment key
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Utilisation du modèle Imagen 4 pour une qualité optimale
      const response = await ai.models.generateImages({
        model: 'imagen-4.0-generate-001',
        prompt: `Professional commercial photography of ${prompt}, high resolution, studio lighting, product focused, The North Face style, 8k, sharp focus`,
        config: {
          numberOfImages: 1,
          aspectRatio: '1:1',
        },
      });

      if (response.generatedImages && response.generatedImages.length > 0) {
        const base64Data = response.generatedImages[0].image.imageBytes;
        const imageUrl = `data:image/png;base64,${base64Data}`;
        setGeneratedImage(imageUrl);
      } else {
        throw new Error("API returned no images");
      }
    } catch (error: any) {
      console.error("Erreur de génération:", error);
      
      // If error indicates project/billing issue, retry selection
      if (error?.message?.includes("Requested entity was not found")) {
        // @ts-ignore
        if (window.aistudio) {
          // @ts-ignore
          await window.aistudio.openSelectKey();
        }
      }
      
      alert("Une erreur est survenue lors de la génération. Veuillez vérifier votre clé API.");
    } finally {
      setIsGenerating(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl animate-scaleUp">
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-black uppercase tracking-tight">{t.studioTitle}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-3">{t.studioPrompt}</label>
            <div className="flex gap-4">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ex: A North Face reversible jacket worn by a model in a snowy forest, cinematic lighting..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-2xl p-4 text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all resize-none h-24"
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
              className="w-full mt-4 bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  {t.studioGenerating}
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5" />
                  {t.studioGenerate}
                </>
              )}
            </button>
          </div>

          <div className="aspect-square w-full max-sm mx-auto bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden relative group">
            {generatedImage ? (
              <>
                <img src={generatedImage} alt="Generated" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button
                    onClick={() => {
                      onImageGenerated(generatedImage);
                      onClose();
                    }}
                    className="bg-white text-black px-6 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform"
                  >
                    {t.studioApply}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center p-8">
                <ImageIcon className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Aperçu de l'image générée</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoStudio;
