import { useMemo, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { PedidosStackParamList, Cliente } from "@/types/navigation";
import { maskCpfCnpj, maskPhoneBR } from "@/presentation/utils/masks";

export function useClienteForm() {
  const navigation =
    useNavigation<NativeStackNavigationProp<PedidosStackParamList>>();

  // campos
  const [nome, setNome] = useState("");
  const [celular, setCelular] = useState("");
  const [usarCelularComoWhatsapp, setUsarCelularComoWhatsapp] = useState(true);
  const [whatsapp, setWhatsapp] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [doc, setDoc] = useState("");
  const [obs, setObs] = useState("");

  // endereço (modal)
  const [addrOpen, setAddrOpen] = useState(false);
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  // Efeito para sincronizar celular com whatsapp quando checkbox estiver marcado
  useEffect(() => {
    if (usarCelularComoWhatsapp) {
      setWhatsapp(celular);
    }
  }, [celular, usarCelularComoWhatsapp]);

  // Efeito para limpar whatsapp quando desmarcar o checkbox
  useEffect(() => {
    if (!usarCelularComoWhatsapp) {
      setWhatsapp("");
    }
  }, [usarCelularComoWhatsapp]);

  const canSave = useMemo(() => nome.trim().length >= 2, [nome]);

  const handleSave = () => {
    if (!canSave) return;

    // CORREÇÃO: Verificar se a string está vazia após o trim
    const novoCliente: Cliente = {
      id: Date.now().toString(),
      nome: nome.trim(),
      celular: celular.trim() !== "" ? celular.trim() : undefined,
      whatsapp: whatsapp.trim() !== "" ? whatsapp.trim() : undefined,
      telefone: telefone.trim() !== "" ? telefone.trim() : undefined,
      email: email.trim() !== "" ? email.trim() : undefined,
      documento: doc.trim() !== "" ? doc.trim() : undefined,
      observacoes: obs.trim() !== "" ? obs.trim() : undefined,
      endereco:
        cep.trim() !== ""
          ? {
              cep: cep.trim(),
              logradouro: rua.trim(),
              numero: numero.trim(),
              bairro: bairro.trim(),
              cidade: cidade.trim(),
              uf: uf.trim(),
            }
          : undefined,
    };

    navigation.navigate("NewServico", { cliente: novoCliente });
  };

  // Limpar endereço quando modal fechar
  const handleCloseAddr = () => {
    setAddrOpen(false);
  };

  // Função para manipular mudança no celular
  const handleCelularChange = (text: string) => {
    const formatted = maskPhoneBR(text);
    setCelular(formatted);
  };

  // Função para manipular mudança no whatsapp (apenas quando checkbox desmarcado)
  const handleWhatsappChange = (text: string) => {
    if (!usarCelularComoWhatsapp) {
      const formatted = maskPhoneBR(text);
      setWhatsapp(formatted);
    }
  };

  // Função para manipular mudança no telefone fixo
  const handleTelefoneChange = (text: string) => {
    const formatted = maskPhoneBR(text);
    setTelefone(formatted);
  };

  // Função para alternar o checkbox
  const toggleUsarCelularComoWhatsapp = () => {
    setUsarCelularComoWhatsapp(!usarCelularComoWhatsapp);
  };

  return {
    // nav
    navigation,

    // state
    nome,
    setNome,
    celular,
    whatsapp,
    telefone,
    email,
    setEmail,
    doc,
    obs,
    setObs,
    usarCelularComoWhatsapp,
    addrOpen,
    setAddrOpen,
    cep,
    setCep,
    rua,
    setRua,
    numero,
    setNumero,
    bairro,
    setBairro,
    cidade,
    setCidade,
    uf,
    setUf,

    // derived/handlers
    canSave,
    handleSave,
    handleCloseAddr,
    handleCelularChange,
    handleWhatsappChange,
    handleTelefoneChange, // NOVA função
    toggleUsarCelularComoWhatsapp,

    // masks (mantido para compatibilidade)
    applyDoc: (t: string) => setDoc(maskCpfCnpj(t)),
  };
}
