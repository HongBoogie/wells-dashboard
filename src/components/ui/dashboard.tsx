const DashboardImg = () => {
  return (
    <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path
            d="M 50 0 L 0 0 0 50"
            fill="none"
            stroke="#f0f0f0"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="500" height="300" fill="url(#grid)" />

      <line x1="50" y1="250" x2="50" y2="50" stroke="#666" strokeWidth="2" />
      <text x="20" y="250" fill="#666">
        0
      </text>
      <text x="20" y="200" fill="#666">
        200
      </text>
      <text x="20" y="150" fill="#666">
        400
      </text>
      <text x="20" y="100" fill="#666">
        600
      </text>
      <text x="20" y="50" fill="#666">
        800
      </text>

      <line x1="50" y1="250" x2="450" y2="250" stroke="#666" strokeWidth="2" />
      <text x="100" y="270" fill="#666">
        1월
      </text>
      <text x="200" y="270" fill="#666">
        2월
      </text>
      <text x="300" y="270" fill="#666">
        3월
      </text>
      <text x="400" y="270" fill="#666">
        4월
      </text>

      <path
        d="M 100 170 L 200 190 L 300 150 L 400 175"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="3"
      />
      <circle cx="100" cy="170" r="4" fill="#3b82f6" />
      <circle cx="200" cy="190" r="4" fill="#3b82f6" />
      <circle cx="300" cy="150" r="4" fill="#3b82f6" />
      <circle cx="400" cy="175" r="4" fill="#3b82f6" />

      <path
        d="M 100 200 L 200 180 L 300 195 L 400 190"
        fill="none"
        stroke="#22c55e"
        strokeWidth="3"
      />
      <circle cx="100" cy="200" r="4" fill="#22c55e" />
      <circle cx="200" cy="180" r="4" fill="#22c55e" />
      <circle cx="300" cy="195" r="4" fill="#22c55e" />
      <circle cx="400" cy="190" r="4" fill="#22c55e" />

      <path
        d="M 100 210 L 200 205 L 300 215 L 400 200"
        fill="none"
        stroke="#a855f7"
        strokeWidth="3"
      />
      <circle cx="100" cy="210" r="4" fill="#a855f7" />
      <circle cx="200" cy="205" r="4" fill="#a855f7" />
      <circle cx="300" cy="215" r="4" fill="#a855f7" />
      <circle cx="400" cy="200" r="4" fill="#a855f7" />

      <rect x="50" y="20" width="12" height="3" fill="#3b82f6" />
      <text x="70" y="24" fill="#666" fontSize="12">
        정수기
      </text>

      <rect x="150" y="20" width="12" height="3" fill="#22c55e" />
      <text x="170" y="24" fill="#666" fontSize="12">
        공기청정기
      </text>

      <rect x="250" y="20" width="12" height="3" fill="#a855f7" />
      <text x="270" y="24" fill="#666" fontSize="12">
        비데
      </text>
    </svg>
  );
};

export default DashboardImg;
