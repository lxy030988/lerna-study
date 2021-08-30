const path = require('path')
const fs = require('fs-extra') //fs
const execa = require('execa') //child_process
class InitCommand {
  constructor(options) {
    this.options = options
    this.rootPath = path.resolve()
  }
  async execute() {
    console.info('Initializing Git repository')
    await execa('git', ['init'], { stdio: 'pipe' }) //初始化git仓库
    await this.ensurePackageJSON()
    await this.ensureLernaConfig()
    await this.ensurePackagesDir()
    console.info('Initialized Lerna files')
  }
  async ensurePackagesDir() {
    console.info('创建packages')
    await fs.mkdirp(path.join(this.rootPath, 'packages'))
  }
  async ensurePackageJSON() {
    console.info('创建package.json')
    await fs.writeJson(
      path.join(this.rootPath, 'packge.json'),
      {
        name: 'root',
        private: true,
        devDependencies: {
          lerna: '^4.0.0',
        },
      },
      { spaces: 2 },
    )
  }
  async ensureLernaConfig() {
    console.info('创建lerna.json')
    await fs.writeJson(
      path.join(this.rootPath, 'lerna.json'),
      {
        packages: ['packages/*'],
        version: '0.0.0',
      },
      { spaces: 2 },
    )
  }
}

function factory(argv) {
  new InitCommand(argv).execute()
}

module.exports = factory
