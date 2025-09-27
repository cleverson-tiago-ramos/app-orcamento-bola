import { useState, useCallback } from "react";
import { CEPService, Endereco } from "@/services/cepService";

export function useCEP() {
  const [carregando, setCarregando] = useState(false);
  const [erroCEP, setErroCEP] = useState<string | null>(null);

  const buscarCEP = useCallback(async (cep: string) => {
    if (cep.replace(/\D/g, "").length !== 8) {
      setErroCEP(null);
      return null;
    }

    setCarregando(true);
    setErroCEP(null);

    try {
      const endereco = await CEPService.buscarCEP(cep);

      if (!endereco) {
        setErroCEP("CEP não encontrado");
        return null;
      }

      return endereco;
    } catch (error) {
      setErroCEP("Erro ao buscar CEP. Tente novamente.");
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
