import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { get } from 'lodash';
import { toast } from 'react-toastify';
import validator from 'validator';
import { FaUserCircle, FaEdit } from 'react-icons/fa';
import { Container } from '../../styles/GlobalStyles';
import * as Actions from '../../store/modules/aluno/actions';
import { Form, Profile } from './styled';
import axios from '../../services/axios';

export default function Aluno() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [foto, setFoto] = useState('');

  // Realizando a captura do id
  const params = useParams();
  const id = get(params, 'id', '');

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');

        setFoto(Foto);
        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);
      } catch (e) {
        toast.warn('Erro na chamada da API');
      }
    }

    function cleanInputs() {
      setNome('');
      setSobrenome('');
      setEmail('');
      setIdade('');
      setPeso('');
      setAltura('');
    }
    if (id) getData();
    else cleanInputs();
  }, [id]);

  // função para trabalhar os valores quebrados e flutuantes do código.
  const formatarValor = (e, setState) => {
    const valor = e.target.value; // capturando o valor do evento.
    let valorDois = valor.replace(/[^0-9]/g, ''); // Remove caracteres não numéricos

    if (valorDois === '') {
      setState('0.00'); // Evita erro caso valor seja vazio
      return;
    }

    valorDois = parseFloat(valorDois) / 100; // Converte para número e divide por 100
    setState(valorDois.toFixed(2)); // Formata para 2 casas decimais
  };

  async function handleSubmit(e) {
    e.preventDefault();

    let errors = false;

    if (nome.length < 3 || nome.length > 255) {
      errors = true;
      toast.error('Campo nome deve ter entre 3 a 255 caracteres');
    }
    if (sobrenome.length < 2 || sobrenome.length > 255) {
      errors = true;
      toast.error('Campo sobrenome deve ter entre 2 a 50 caracteres');
    }

    if (!idade) {
      errors = true;
      toast.error('Campo idade deve ser preenchido');
    }

    if (!peso) {
      errors = true;
      toast.error('Campo peso deve ser preenchido');
    }

    if (!altura) {
      errors = true;
      toast.error('Campo altura deve ser preenchido');
    }

    if (!validator.isEmail(email)) {
      errors = true;
      toast.error('Email inválido');
    }

    if (errors) return;

    dispatch(
      Actions.RequestAlunoRequest({
        id,
        nome,
        sobrenome,
        email,
        idade,
        peso,
        altura,
        navigate,
      })
    );
  }

  return (
    <Container>
      <h1>{id ? 'Editar Aluno' : 'Novo aluno'}</h1>
      <Form onSubmit={handleSubmit}>
        {id && (
          <Profile>
            {foto ? <img src={foto} alt="" /> : <FaUserCircle size={200} />}
            <Link to={`/fotos/${id}`}>
              <FaEdit size={24} />
            </Link>
          </Profile>
        )}

        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Seu nome"
          />
        </label>
        <label htmlFor="sobrenome">
          Sobrenome:
          <input
            type="text"
            value={sobrenome}
            onChange={(e) => setSobrenome(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Seu sobrenome"
          />
        </label>
        <label htmlFor="Email">
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Seu Email"
          />
        </label>
        <label htmlFor="idade">
          Idade:
          <input
            type="number"
            value={idade}
            onChange={(e) => setIdade(e.target.value)} // Conforme for digitando ele vai aparecer.
            placeholder="Sua idade"
          />
        </label>
        <label htmlFor="Peso">
          Peso:
          <input
            type="number"
            value={peso}
            onChange={(e) => formatarValor(e, setPeso)} // Conforme for digitando ele vai aparecer.
            placeholder="Seu peso"
          />
        </label>
        <label htmlFor="altura">
          Altura:
          <input
            type="number"
            value={altura}
            onChange={(e) => formatarValor(e, setAltura)} // Conforme for digitando ele vai aparecer.
            placeholder="Sua altura"
          />
        </label>
        <button type="submit">{id ? 'Salvar' : 'Criar Aluno'}</button>
      </Form>
    </Container>
  );
}
