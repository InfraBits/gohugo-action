import * as core from '@actions/core';
import * as tc from '@actions/tool-cache';
import * as io from '@actions/io';

async function run(): Promise<void> {
  const version: string = core.getInput('version');
  const toolAssets: string = await tc.downloadTool(`https://github.com/gohugoio/hugo/releases/download/v${version}/hugo_extended_${version}_Linux-64bit.tar.gz`);
  const toolExtractedFolder: string = await tc.extractTar(toolAssets, "/tmp");
  await io.mv(`${toolExtractedFolder}/hugo`, "/usr/local/bin/hugo");
}

run()
