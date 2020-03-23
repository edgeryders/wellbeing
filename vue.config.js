// vue.config.js
module.exports = {
  pages: {
    'index': {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Wellbeing in Europe',
    },
    'de': {
      // entry for the page
      entry: 'src/pages/de/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'de.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Wellbeing in Europe',
    },
    'srb': {
      // entry for the page
      entry: 'src/pages/srb/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'srb.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Wellbeing in Europe',
    },
    'cz': {
      // entry for the page
      entry: 'src/pages/cz/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'cz.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Wellbeing in Europe',
    },
    'pl': {
      // entry for the page
      entry: 'src/pages/pl/main.js',
      // the source template
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'pl.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Wellbeing in Europe',
    }
  }
}
