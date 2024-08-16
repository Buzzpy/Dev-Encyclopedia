const componentsDirectory = '../../../example/components';

export async function fetchComponentContent(componentName, data) {
  // const response = await fetch(`${componentsDirectory}/${componentName}.html`);
  const response = await fetch(`${componentsDirectory}/${componentName}`);

  if (response.ok) {
    let extract = await response.text();
    let script = document.createElement('script');
    script.innerHTML = extract;
    console.log('logg:', script);
    // let markup = evalComponentContent(extract, data);
    // let markup = transformToTemplateLiteral(extract);

    // console.log('markup', markup);

    // if (markup) {
    //   let fragment = document.createElement('div');
    //   fragment.innerHTML = markup;
    //   let template = fragment.querySelector('template');
    //   if (template) {
    //     let content = document.importNode(template.content, true);
    //     return content;
    //   }
    // }
    // return null;
    return script;
  } else {
    console.log(
      `something happened when trying to get the component: ${componentName}`
    );
  }
}

fetchComponentContent('button.js');
