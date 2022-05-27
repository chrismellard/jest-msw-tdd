import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  MakeReservation: Scalars['Boolean'];
};


export type MutationMakeReservationArgs = {
  input?: InputMaybe<Reservation>;
};

export type Query = {
  __typename?: 'Query';
  Reservations: Scalars['Boolean'];
};

export type Reservation = {
  id: Scalars['String'];
};

export type MakeReservationMutationVariables = Exact<{
  reservation: Reservation;
}>;


export type MakeReservationMutation = { __typename?: 'Mutation', MakeReservation: boolean };


export const MakeReservationDocument = gql`
    mutation makeReservation($reservation: Reservation!) {
  MakeReservation(input: $reservation)
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    makeReservation(variables: MakeReservationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MakeReservationMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakeReservationMutation>(MakeReservationDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'makeReservation', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;