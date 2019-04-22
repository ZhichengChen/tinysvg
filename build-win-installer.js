// var electronInstaller = require('electron-winstaller');
// resultPromise = electronInstaller.createWindowsInstaller({
//     appDirectory: './release-builds/tinysvg-win32-ia32/',
//     outputDirectory: './release-builds/tinysvg-win32-ia32/',
//     authors: 'http://www.chenzhicheng.com',
//     exe: 'tinysvg.exe'
//   });

// resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`));
var MSICreator = require('electron-wix-msi').MSICreator;

// Step 1: Instantiate the MSICreator
const msiCreator = new MSICreator({
  appDirectory: './release-builds/tinysvg-win32-ia32/',
  description: 'GUI for SVGO inspire by https://github.com/jakearchibald/svgomg',
  exe: 'tinysvg',
  name: 'tinysvg',
  manufacturer: 'http://www.chenzhicheng.com',
  version: '1.0.0',
  outputDirectory: './release-builds/tinysvg-win32-ia32/'
});

create();

async function create() {
	// Step 2: Create a .wxs template file
	await msiCreator.create();

	// Step 3: Compile the template to a .msi file
	await msiCreator.compile();
}

