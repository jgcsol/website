export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__left">
          <p>© {new Date().getFullYear()} JGC Solutions — Jesus Cabrero</p>
          <p>
            <a href="mailto:contact@jgcsol.com" className="site-footer__email">contact@jgcsol.com</a>
          </p>
        </div>

        <div className="site-footer__right">
          <a href="https://github.com/jgcsol" target="_blank" rel="noopener noreferrer" className="site-footer__link" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.094 3.292 9.417 7.866 10.944.576.106.786-.25.786-.556 0-.275-.01-1-.016-1.964-3.2.695-3.876-1.544-3.876-1.544-.522-1.326-1.275-1.679-1.275-1.679-1.042-.712.08-.698.08-.698 1.152.08 1.758 1.183 1.758 1.183 1.024 1.754 2.685 1.248 3.338.954.104-.742.402-1.248.732-1.535-2.554-.29-5.242-1.277-5.242-5.682 0-1.255.448-2.282 1.183-3.088-.118-.289-.512-1.455.112-3.033 0 0 .964-.309 3.157 1.18A10.983 10.983 0 0 1 12 6.844c.976.004 1.958.132 2.876.387 2.19-1.489 3.152-1.18 3.152-1.18.626 1.578.232 2.744.114 3.033.737.806 1.182 1.833 1.182 3.088 0 4.417-2.694 5.388-5.256 5.674.413.356.78 1.058.78 2.133 0 1.54-.014 2.78-.014 3.158 0 .31.207.67.792.556C20.71 21.415 24 17.094 24 12 24 5.648 18.352.5 12 .5z" fill="currentColor"/>
            </svg>
            <span className="site-footer__label">GitHub</span>
          </a>

          <a href="https://linkedin.com/in/jesus-cabrero" target="_blank" rel="noopener noreferrer" className="site-footer__link" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M4.98 3.5C4.98 5.156 3.812 6.3 2 6.3 2 6.3 2 4.016 4.98 3.5zM2 8h5.96V22H2V8zM9.5 8H15v1.91c.87-1.3 2.828-2.8 5.86-2.8C24 7.11 24 12 24 12v10h-6V12c0-2.5-.34-4.2-2.5-4.2-1.45 0-2.1 1.01-2.46 1.99-.12.37-.15.88-.15 1.41V22H9.5V8z" fill="currentColor"/>
            </svg>
            <span className="site-footer__label">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
