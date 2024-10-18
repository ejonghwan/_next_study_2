// 사용자 데이터를 가져오는 쿼리 함수를 정의합니다.

import { useQuery } from '@tanstack/react-query';
import { userKeys } from './userKeys';
import { fetchUsers, fetchUserById } from '@/api/userApi';

export const useUsers = () => {
  return useQuery(userKeys.list(), fetchUsers);
};

export const useUser = (id: string) => {
  return useQuery(userKeys.detail(id), () => fetchUserById(id));
};