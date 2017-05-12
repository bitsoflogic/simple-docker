const SimpleDocker = require('../index');
const expect = require('chai').expect;

describe('simple-docker', function() {
  describe('raw', () => {
    it('works', async () => {
      const docker = new SimpleDocker();
      const version = await docker.raw(['version']);

      expect(version.raw.code).to.equal(0);
      expect(version.raw.stdout.length).to.be.above(0);
      expect(version.raw.stderr).to.equal('');
    });
  });
});
