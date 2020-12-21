module.exports = {
    ci: {
      collect: {
        /* Add configuration here */
        staticDistDir: './dist',
        url: ['http://localhost:8080']
      },
      assert: {
        assertions: {
          'categories:performance': ['warn', {minScore: 1}],
          'categories:accessibility': ['error', {minScore: 1}]
        }
      },
      upload: {
        /* Add configuration here */
        target: 'temporary-public-storage',
      },
    },
  };