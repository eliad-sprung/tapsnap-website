export default function AnnouncementBar() {
  return (
    <div className="announcement-bar py-2 px-4 text-center text-xs sm:text-sm font-medium text-white">
      <span className="opacity-90">
        📋 If you see <strong>TAPSNAP LLC</strong> on your statement or have a charge question, email{" "}
        <a href="mailto:support@tap-snap.com" className="underline underline-offset-2 font-semibold">
          support@tap-snap.com
        </a>
      </span>
    </div>
  );
}
