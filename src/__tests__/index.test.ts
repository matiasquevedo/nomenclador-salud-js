// __tests__/index.test.ts

import { saludar, sumar } from '../index';
import {Studies} from '../index';
import { Study } from '../models/Study'


describe('Funciones de index', () => {

  test('get all studies successfully', () => {
    const studies = Studies.getAllStudies()
    // console.log(studies)
    expect(studies.length).not.toBe(0);
  });

  test('get study successfully by code', () => {
    const study = Studies.getStudy(340222)
    expect(study).not.toBeNull();
    expect(study.name).toBe('Espinografia');

  });


});