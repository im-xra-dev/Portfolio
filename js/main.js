function expand(type) {
  const mode = $(`#${type}`).children('.experience-bubble-buttons').children('a').html()

  const expandedDisplay = mode === 'expand' ? 'show' : 'hide';
  const collapsedDisplay = mode === 'collapsed' ? 'show' : 'hide';

  $(`#${type}-desc-big`).removeClass(collapsedDisplay)
  $(`#${type}-desc-big`).addClass(expandedDisplay)

  $(`#${type}-desc-small`).addClass(collapsedDisplay)
  $(`#${type}-desc-small`).removeClass(expandedDisplay)

  $(`#${type}`).children('.experience-bubble-buttons').children('a.expandbtn').html(mode === 'expand' ? 'collapse' : 'expand')
}
