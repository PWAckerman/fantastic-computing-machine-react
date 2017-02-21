const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const colors = require('colors');

process.env.NODE_ENV = 'production';

//pass the webpack config to the webpack constructor to create a webpack compiler
const compiler = webpack(webpackConfig)
//run the webpack compiler
//callback returns error, statistics parameters
compiler.run((err,stats) => {
  if(err){
    console.log(err.bold.red)
    //return failure
    return 1
  }
  //convert stats to json
  const jsonStats = stats.toJson();

  //were there errors?
  if(jsonStats.hasErrors){
      //log each error individually
    return jsonStats.errors.map(error => console.log(error.red))
  }

  if(jsonStats.hasWarnings){
    //show these warnings
    console.log('webpack generated the following warnings: '.bold.yellow)
    jsonStats.warnings.map(warning => console.log(warning.yellow));
  }
  //show those stats
  console.log(`webpack stats: ${stats}`);
  console.log('Compiled'.green)

  return 0;

})
