const expect = require('chai').expect,
	baseDir = __dirname + '/../../..',
	importerDir = baseDir + '/lib/importers',
	importerFactory = require(importerDir + '/index'),
	formats = require(baseDir + '/index').Formats;

describe('Importer Factory', function () {
	describe('hasSupport', function () {
		it('should return true for supported format', function () {
			expect(importerFactory.hasSupport(formats.OAS)).to.be.true;
			expect(importerFactory.hasSupport(formats.RAML08)).to.be.true;
			expect(importerFactory.hasSupport(formats.RAML10)).to.be.true;
		});
		it('should return false for not supported format', function () {
			expect(importerFactory.hasSupport(formats.ABCD)).to.be.false;
		});
	});
	describe('factory', function () {
		it('should return valid exporter instance for supported format', function () {
			expect(importerFactory.factory(formats.OAS)).to.be.instanceof(require(importerDir + '/swagger'));
			expect(importerFactory.factory(formats.RAML08)).to.be.instanceof(require(importerDir + '/raml08'));
			expect(importerFactory.factory(formats.RAML10)).to.be.instanceof(require(importerDir + '/raml10'));
		});
		it('should return null for not supported format', function () {
			expect(importerFactory.factory(formats.ABCD)).to.equal(null);
		});
	});
});
