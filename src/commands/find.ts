import { Document } from 'mongodb';
import Chainable = Cypress.Chainable;
import { MongoOptions } from '../index';
import { validate } from '../utils/validator';

export function findOne(query: Document, options: MongoOptions): Chainable {
  const args = {
    uri: Cypress.env('mongodb').uri,
    options: {
      database: options?.database || Cypress.env('mongodb').database,
      collection: options?.collection || Cypress.env('mongodb').collection,
    },
    pipeline: query,
  };

  validate(args);

  if (!query) {
    throw new Error('Query must be specified');
  } else if (typeof query !== 'object' || Array.isArray(query)) {
    throw new Error('Query must be a valid mongodb query object');
  }

  return cy.task('findOne', args).then((result: any) => {
    return result;
  });
}

export function findMany(query: Document, options: MongoOptions): Chainable {
  const args = {
    uri: Cypress.env('mongodb').uri,
    options: {
      database: options?.database || Cypress.env('mongodb').database,
      collection: options?.collection || Cypress.env('mongodb').collection,
    },
    pipeline: query,
  };

  validate(args);

  if (!query) {
    throw new Error('Query must be specified');
  } else if (typeof query !== 'object' || Array.isArray(query)) {
    throw new Error('Query must be a valid mongodb query object');
  }

  return cy.task('findMany', args).then((result: any) => {
    return result;
  });
}
