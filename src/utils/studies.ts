import studiesList from '../assets/estudios.json';
import { Study } from '../models/Study'
import _ from 'lodash';

function getAllStudies(): Study[] {
	// console.log(studiesList);
  return studiesList;
}


function getStudy( code:number ): Study {
	if (code === undefined || code === null) {
	  throw new Error('¡No olvidar el código de estudio!');
	}

	const studies = studiesList.filter((value:{code: number})=>{
		return value.code === code
	});


	return studies[0];

}



export default {
	getAllStudies,
	getStudy
};