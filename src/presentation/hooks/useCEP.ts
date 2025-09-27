import { useState, useCallback } from "react";
import { CEPService, Endereco } from "@/services/cepService";

export function useCEP() {
  const [carregando, setCarregando] = useState(false);
  const [erroCEP, setErroCEP] = useState<string | null>(null);

  const buscarCEP = useCallback(async (cep: string) => {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setErroCEP(null);
      return null;
    }

    setCarregando(true);
    setErroCEP(null);

    try {
      const endereco = await CEPService.buscarCEP(cep);
      return endereco;
    } catch (error) {
      // CORREÇÃO: Tratar diferentes tipos de erro
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Erro ao buscar CEP. Tente novamente.";

      setErroCEP(errorMessage);
      return null;
    } finally {
      setCarregando(false);
    }
  }, []);

  const limparErro = useCallback(() => {
    setErroCEP(null);
  }, []);

  return {
    buscarCEP,
    carregando,
    erroCEP,
    limparErro,
  };
}
