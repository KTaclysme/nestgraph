/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  addUser: User;
  deleteUser: User;
};


export type MutationAddUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float']['input'];
};

export type Query = {
  __typename?: 'Query';
  getAllUser: Array<User>;
  getUser: User;
  user: User;
};


export type QueryGetUserArgs = {
  email: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['Float']['input'];
};

/** user */
export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['Float']['output'];
};
