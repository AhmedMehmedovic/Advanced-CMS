/**
 *
 * @param {HTMLElement} element
 * @param {object} options
 * @returns
 */
const table = function (
  element,
  options = {
    columns: [],
    search: true,
    pagination: true,
    paginationMenu: [10, 20, 30],
  }
) {
  const self = this;

  console.log(element, options.columns);

  return {
    show: function () {},
    createRow: function () {},
    createColumn: function () {},
    edit: function () {},
    delete: function () {},
  };
};
