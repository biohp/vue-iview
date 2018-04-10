export function getTreeValue(checked, level) {
	let value = [];
	for (let i = 0; i < checked.length; i++) {
	    if (level.includes(checked[i].level) || level.length === 0) value.push(checked[i].value);
	}
	return value;
}

export function resetTree(tree) {
	tree.map( item => {
		if (item.hasOwnProperty('children')) {
			if (item.hasOwnProperty('indeterminate')) item.indeterminate = false;
			resetTree(item.children);
		}
		if (item.hasOwnProperty('checked')) item.checked = false;
		return item;
	});
}

export function setTree(tree, value) {
	tree = tree.map( item => {
		if (item.hasOwnProperty('children')) {
			item.children = setTree(item.children, value);
		} else {
			if (value.includes(item.value)) item = { ...item, checked: true };
		} 
		return item;
	});
	return tree;
}