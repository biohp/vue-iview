/**
 * 筛选已选择节点的value值
 *
 * @param  {array} checked	获取的节点数组
 * @param  {array} level	需要筛选的树层级
 * @return {array}          Tree value数组
 */
export function getTreeValue(checked, level) {
	let value = [];
	for (let i = 0; i < checked.length; i++) {
	    if (level.includes(checked[i].level) || level.length === 0) value.push(checked[i].value);
	}
	return value;
}
/**
 * 清空树的选择状态
 *
 * @param  {array} tree 	Tree数据
 */
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
/**
 * 设置树的选择节点
 *
 * @param  {array} tree 	获取的节点数组
 * @param  {array} value 	需要设置的节点value值
 * @return {array}          Tree数据
 */
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