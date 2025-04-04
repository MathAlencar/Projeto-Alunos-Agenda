import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import * as Actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';
import { Form } from './styled';

export default function Fotos() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const id = get(params, 'id', '');
  const [foto, setFoto] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get(`alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');

        setFoto(Foto);
      } catch (e) {
        toast.warn('Erro na chamada da API');
      }
    }

    getData();
  }, [id]);

  const handleChange = async (e) => {
    const fotoAluno = e.target.files[0]; // capturando o arquivo
    const fotoURL = URL.createObjectURL(fotoAluno); // Transformando em um link no prórpio localhost do usuário.

    setFoto(fotoURL);

    // axios por padrão é json -> neste caso iremos simular um formulário.
    const formData = new FormData();
    formData.append('aluno_id', id);
    formData.append('foto', fotoAluno);

    try {
      await axios.post('/fotos/', formData, {
        'Content-Type': 'multipart/form-data',
      });

      toast.success('Foto enviada com sucesso!');
    } catch (err) {
      const Erro = get(err, 'response.data.errors', []);
      const status = get(err, 'response.status', '');

      if (status === 401) {
        toast.warn('Você precisa realizar o login novamente!');
        dispatch(Actions.LoginFail());
        navigate('/login');
        return;
      }

      Erro.forEach((element) => {
        toast.warn(element);
      });
    }
  };

  return (
    <Container>
      <h1>Página de Fotos</h1>

      <Form>
        <label htmlFor="foto" alt="enviar foto">
          <img src={foto} alt="" />
          <input type="file" id="foto" onChange={handleChange} />
        </label>
      </Form>
    </Container>
  );
}
