const {apiFetch} = wp;
import {map} from 'lodash';

const YieldPostType = function* () {
	let i = 1;
	console.log(i++);
	yield apiFetch({path: '/wp/v2/types?context=edit'}).next().value;
};
export const PostTypeFetch = function* () {
	let postType = yield YieldPostType();
	yield postType.next().value.then(function (data) {
		return Object.keys(data).map(i => data[i])
	})
};
