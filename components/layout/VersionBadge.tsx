import packageJson from '../../package.json'

export default function VersionBadge() {
  return (
    <div className="fixed bottom-4 right-4 bg-neutral-800 text-white text-xs px-2 py-1 rounded-md opacity-70 hover:opacity-100 transition-opacity duration-200 z-50">
      v{packageJson.version}
    </div>
  )
}
