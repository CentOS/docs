const DEFAULT_PACKAGE_URL_FORMAT = 'https://apps.fedoraproject.org/packages/%s'

/**
 * Adds an AsciiDoc inline macro named package that provides a shorthand syntax for linking to the
 * page on Fedora apps for the specified Fedora package.
 *
 * This macro produces links that use the base URL https://apps.fedoraproject.org/packages by
 * default. That URL can be overridden by defining the document attribute named
 * uri-package-url-format. The %s token in the value of that attribute gets replaced by the name of
 * the package.
 *
 * Example:
 *
 *   package:asciidoctor[]
 *
 * @author Dan Allen <dan.j.allen@gmail.com>
 */
const PackageInlineMacro = (() => {
  const superclass = Opal.module(null, 'Asciidoctor').Extensions.InlineMacroProcessor
  const scope = Opal.klass(Opal.module(null, 'Antora'), superclass, 'PackageInlineMacro', function () {})

  Opal.defn(scope, '$initialize', function initialize (name, config) {
    Opal.send(this, Opal.find_super_dispatcher(this, 'initialize', initialize), [name, config])
  })

  Opal.defn(scope, '$process', function (parent, target, attrs) {
    const format = parent.getDocument().getAttribute('url-package-url-format', DEFAULT_PACKAGE_URL_FORMAT)
    const url = format.replace('%s', target)
    const content = target
    const attributes = Opal.hash2(['window'], { window: '_blank' })
    return this.createInline(parent, 'anchor', content, { type: 'link', target: url, attributes })
  })

  return scope
})()

module.exports.register = (registry) => {
  registry.inlineMacro(PackageInlineMacro.$new('package', Opal.hash()))
}
