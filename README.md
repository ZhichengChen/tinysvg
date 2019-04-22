# tinysvg

GUI for SVGO inspire by [svgomg](https://github.com/jakearchibald/svgomg)

![Mac OSX X screenshot](https://raw.github.com/ZhichengChen/tinysvg/master/screenshots/1.png)&nbsp;&nbsp;![Mac OSX X screenshot](https://raw.github.com/ZhichengChen/tinysvg//master/screenshots/2.png)

# Download and use

Mac OS X – [tinysvg-darwin-x64.dmg](https://github.com/ZhichengChen/tinysvg/releases/download/v1.0.0/tinysvg-darwin-x64.dmg)

Windows – [tinysvg-linux-x64.zip](https://github.com/ZhichengChen/tinysvg/releases/download/v1.0.0/tinysvg-linux-x64.zip)

Linux – [tinysvg-win32-ia32.zip](https://github.com/ZhichengChen/tinysvg/releases/download/v1.0.0/tinysvg-win32-ia32.zip)

# Running locally

Install dependencies:

```
yarn install
```

Run local:

```
yarn start
```

# Build

## build mac

```
yarn package-mac
yarn package-mac-dmg
```
## build win

Install Xquart https://www.xquartz.org/

Install wine https://www.winehq.org/

Add to path https://wiki.winehq.org/MacOS_FAQ#How_to_launch_wine_from_terminal_instead_of_the_wine_application.3F

```
yarn package-win
```

## build linux

```
yarn package-linux
```
# License and copyrights

This software is released under the terms of the [MIT license](https://github.com/ZhichengChen/tinysvg/blob/master/LICENSE).
