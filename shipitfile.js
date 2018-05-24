module.exports = shipit => {
  require('shipit-deploy')(shipit)
  require('shipit-npm')(shipit)

  shipit.initConfig({
    default: {
      workspace: '/tmp/cosmetics-server-tmp',
      deployTo: '/tmp/cosmetics-server',
      repositoryUrl: 'https://github.com/helozjisky/cosmetics-server.git',
      ignores: ['.git', 'node_modules'],
      keepReleases: 2,
      deleteOnRollback: false,
      shallowClone: true
    },
    staging: {
      servers: ['dc2-user@116.85.9.252']
    },
    development: {
      servers: ['jason@localhost']
    },
  })

  shipit.task('pwd', function() {
    return shipit.remote('pwd');
  })
}
