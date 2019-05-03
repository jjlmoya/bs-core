const {apiFetch} = wp;
export const PostTypeFetch = function () {
	apiFetch({path: '/wp/v2/types'}).then(types => {
		console.log(types);
	});
};
