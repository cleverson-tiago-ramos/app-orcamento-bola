import { useMemo, useState } from "react";
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

  const canSave = useMemo(() => nome.trim().length >= 2, [nome]);

  const handleSave = () => {
    if (!canSave) return;
    const novoCliente: Cliente = {
      id: Date.now().toString(),
      nome: nome.trim(),
      telefone: celular || telefone,
      email: email.trim() || undefined,
      documento: doc.trim() || undefined,
      observacoes: obs.trim() || undefined,
      endereco: cep
        ? {
            cep,
            logradouro: rua,
            numero,
            bairro,
            cidade,
            uf,
          }
        : undefined,
    };
    navigation.navigate("NewServico", { cliente: novoCliente });
  };

  // Limpar endereço quando modal fechar
  const handleCloseAddr = () => {
    setAddrOpen(false);
  };

  return {
    // nav
    navigation,

    // state
    nome,
    setNome,
    celular,
    setCelular,
    telefone,
    setTelefone,
    email,
    setEmail,
    doc,
    setDoc,
    obs,
    setObs,

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

    // masks
    applyPhone: (t: string) => setCelular(maskPhoneBR(t)),
    applyTel: (t: string) => setTelefone(maskPhoneBR(t)),
    applyDoc: (t: string) => setDoc(maskCpfCnpj(t)),
  };
}
