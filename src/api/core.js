export let Categories = function (select) {
    const {getEntityRecords} = select('core');
    const query = {per_page: -1, hide_empty: true};
    return getEntityRecords('taxonomy', 'category', query);
};

export let PostTypes = function (select) {
    const {getPostTypes} = select('core');
    return getPostTypes();
};

export let PostByType = function (select, type) {
    const {getEntityRecords} = select('core');
    const query = {per_page: -1};
    return getEntityRecords('postType', type, query);
};



