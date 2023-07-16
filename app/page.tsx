'use client';

import { useFetch } from '@/utils/useFetch';
import Image from 'next/image';

type Repository = {
  full_name: string;
  description: string;
};

export default function Home() {
  const { data: repositories, isFetching } = useFetch<Repository[]>(
    'https://api.github.com/users/PierpaoloZotti/repos'
  );
  return (
    <main className='flex min-h-screen flex-col items-center justify-start p-24'>
      <div className='z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex'>
        <a
          className='pointer-events-none flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0'
          href='https://pierpaolozotti.github.io'
          target='_blank'
          rel='noopener noreferrer'
        >
          By{' '}
          <Image
            src='/logo.svg'
            alt='zeta Logo'
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
      <ul>
        {isFetching && <h1 className='text-xl font-bold'>Carregando dados</h1>}
        {repositories?.map((repo) => (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
