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
    createRow: function (element) {
      let table = element

    let rowCount = table.rows.length
    let row = table.insertRow(rowCount)

    row.insertCell(0).innerHTML = 


    },
    createColumn: function () {},
    edit: function () {},
    delete: function () {},
    close: function() {}
  };
};
