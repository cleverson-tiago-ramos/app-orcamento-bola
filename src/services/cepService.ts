export interface Endereco {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

export class CEPService {
  private static readonly BASE_URL = "https://viacep.com.br/ws";

  static async buscarCEP(cep: string): Promise<Endereco | null> {
    try {
      // Remove caracteres não numéricos
      const cepLimpo = cep.replace(/\D/g, "");

      if (cepLimpo.length !== 8) {
        throw new Error("CEP deve ter 8 dígitos");
      }

      const response = await fetch(`${this.BASE_URL}/${cepLimpo}/json/`);

      if (!response.ok) {
        throw new Error("Erro na conexão com o serviço de CEP");
      }

      const data: Endereco & { erro?: boolean } = await response.json();

      if (data.erro) {
        throw new Error("CEP não encontrado");
      }

      return data;
    } catch (error) {
      // Não logar o erro aqui, deixe o hook tratar
      throw error; // CORREÇÃO: lançar o erro para o hook capturar
    }
  }

  static formatarCEP(cep: string): string {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length <= 5) {
      return cepLimpo;
    }

    return cepLimpo.replace(/^(\d{5})(\d{3})$/, "$1-$2");
  }
}
