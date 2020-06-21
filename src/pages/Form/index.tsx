import React, { useState, useEffect, useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Container, Content, UnForm } from './styles';
import SelectInput from '../../components/SelectInput';
import AsyncSelect from '../../components/AsyncSelectInput';
import api from '../../services/api';

interface ReposOptions {
  value: string;
  label: string;
}

interface Repo {
  name: string;
  full_name: string;
}

interface LoadOptionsCallback {
  (repos: ReposOptions[]): void;
}

interface SelectFormData {
  name: string;
  repo: string;
}

const Form: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [searchOption, setSearchOption] = useState('repos');
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [reposOptions, setReposOptions] = useState<ReposOptions[]>([]);

  const optionsSelect = [
    { value: 'repos', label: 'Owner' },
    { value: 'starred', label: 'Starred' },
  ];

  const toggleOption = useCallback(() => {
    setLoading(true);
    setSearchOption(state => (state === 'repos' ? 'starred' : 'repos'));
    formRef.current?.clearField('repo');
  }, []);

  const loadOptions = useCallback(
    (inputValue: string, callback: LoadOptionsCallback) => {
      const data = reposOptions.filter(repo => repo.label.includes(inputValue));

      callback(data);
    },
    [reposOptions],
  );

  const handleLoadPage = useCallback(async () => {
    try {
      const response = await api.get<Repo[]>(
        `/users/EliasGcf/${searchOption}`,
        {
          params: {
            page: page + 1,
          },
        },
      );

      if (response.data.length !== 0) {
        const data = response.data.map(repo => ({
          label: repo.name,
          value: repo.full_name,
        }));

        setReposOptions(state => [...state, ...data]);
        setPage(page + 1);
      } else {
        throw new Error('No more repos to loading');
      }
    } catch (err) {
      window.alert(err.message);
    }
  }, [searchOption, page]);

  const handleSubmit = useCallback((data: SelectFormData) => {
    if (data.repo) {
      window.open(`https://github.com/${data.repo}`);
    }
  }, []);

  useEffect(() => {
    async function loadRepos() {
      const response = await api.get<Repo[]>(`/users/EliasGcf/${searchOption}`);

      const data = response.data.map(repo => ({
        label: repo.name,
        value: repo.full_name,
      }));

      setReposOptions(data);
      setLoading(false);
    }

    loadRepos();
  }, [searchOption]);

  return (
    <Container>
      <Content>
        <h1>Select Inputs examples with Unform</h1>

        <UnForm ref={formRef} onSubmit={handleSubmit}>
          <SelectInput
            name="name"
            defaultValue={{ value: 'repos', label: 'Owner' }}
            onChange={toggleOption}
            options={optionsSelect}
          />
          <AsyncSelect
            name="repo"
            isLoading={loading}
            defaultOptions={reposOptions}
            loadOptions={loadOptions}
            onMenuScrollToBottom={handleLoadPage}
          />

          <button type="submit">Open</button>
        </UnForm>
      </Content>
    </Container>
  );
};

export default Form;
