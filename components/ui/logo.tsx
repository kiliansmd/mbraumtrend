import Image from "next/image"

interface LogoProps {
  variant?: "default" | "white"
  className?: string
  animated?: boolean
  priority?: boolean
}

export function Logo({ variant = "default", className = "", animated = false, priority = false }: LogoProps) {
  const logoSrc = variant === "white" 
    ? "/images/logo-mb-09022026-white.png"
    : "/images/logo-mb-09022026-rgb.png"
  
  return (
    <Image
      src={logoSrc || "/placeholder.svg"}
      alt="mb.Raumtrend - Raumausstattung"
      width={220}
      height={50}
      className={`${className} ${animated ? "transition-transform hover:scale-[1.02] active:scale-[0.98] duration-300" : ""}`}
      priority={priority}
    />
  )
}

// Old SVG logo kept for backward compatibility if needed
export function LogoSVG({ variant = "default", className = "", animated = false }: { variant?: "default" | "white"; className?: string; animated?: boolean }) {
  const primaryColor = variant === "white" ? "#ffffff" : "#1a2e4a"
  const accentColor = "#8b2635"
  
  return (
    <svg 
      viewBox="0 0 220 50" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-label="mb.Raumtrend"
    >
      <defs>
        {/* Gradient for depth */}
        <linearGradient id="roofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="1" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0.85" />
        </linearGradient>
        
        {/* Shadow */}
        <filter id="shadow">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.15"/>
        </filter>
      </defs>

      {/* House Icon with Arrow */}
      <g className={animated ? "transition-transform hover:scale-105 duration-300 origin-center" : ""}>
        {/* House body - refined proportions */}
        <rect 
          x="12" 
          y="35" 
          width="42" 
          height="35" 
          rx="2.5" 
          fill={primaryColor}
          filter="url(#shadow)"
        />
        
        {/* Roof - more dynamic angle */}
        <path 
          d="M7 40 L33 16 L59 40" 
          stroke="url(#roofGradient)" 
          strokeWidth="5.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          className={animated ? "transition-all hover:stroke-[6.5px] duration-300" : ""}
        />
        
        {/* Roof accent line */}
        <path 
          d="M7 40 L33 16 L59 40" 
          stroke={accentColor}
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          fill="none"
          opacity="0.3"
          strokeDasharray="2 4"
        />
        
        {/* Arrow emerging from house - refined shape */}
        <g className={animated ? "transition-transform hover:translate-x-1 duration-300" : ""}>
          <path 
            d="M40 42 L62 42 L62 33 L78 48 L62 63 L62 54 L40 54 Z" 
            fill={accentColor}
            filter="url(#shadow)"
          />
          {/* Arrow highlight */}
          <path 
            d="M65 45 L72 48 L65 51" 
            stroke={variant === "white" ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.3)"} 
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        
        {/* Window detail - more refined */}
        <rect 
          x="24" 
          y="48" 
          width="16" 
          height="14" 
          rx="1.5" 
          fill={variant === "white" ? "rgba(26, 46, 74, 0.95)" : "rgba(255, 255, 255, 0.95)"} 
        />
        {/* Window frame */}
        <rect 
          x="24" 
          y="48" 
          width="16" 
          height="14" 
          rx="1.5" 
          stroke={variant === "white" ? "rgba(255,255,255,0.2)" : "rgba(26, 46, 74, 0.2)"} 
          strokeWidth="0.5"
          fill="none"
        />
        {/* Window cross */}
        <line 
          x1="32" y1="48" x2="32" y2="62" 
          stroke={variant === "white" ? "rgba(255,255,255,0.15)" : "rgba(26, 46, 74, 0.15)"} 
          strokeWidth="1"
        />
        <line 
          x1="24" y1="55" x2="40" y2="55" 
          stroke={variant === "white" ? "rgba(255,255,255,0.15)" : "rgba(26, 46, 74, 0.15)"} 
          strokeWidth="1"
        />
      </g>
      
      {/* Text - improved typography */}
      <g>
        {/* mb. */}
        <text 
          x="92" 
          y="54" 
          fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
          fontSize="32" 
          fontWeight="700"
          letterSpacing="-1"
          fill={accentColor}
        >
          mb.
        </text>
        
        {/* Raumtrend */}
        <text 
          x="133" 
          y="54" 
          fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif" 
          fontSize="32" 
          fontWeight="600"
          letterSpacing="-0.5"
          fill={primaryColor}
        >
          Raumtrend
        </text>
        
        {/* Subtle underline accent */}
        <line 
          x1="92" 
          y1="60" 
          x2="128" 
          y2="60" 
          stroke={accentColor} 
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.3"
        />
      </g>
    </svg>
  )
}

// Compact version for favicon/icon use
export function LogoIconCompact({ className = "", variant = "default" }: { className?: string; variant?: "default" | "white" }) {
  const primaryColor = variant === "white" ? "#ffffff" : "#1a2e4a"
  const accentColor = "#8b2635"
  
  return (
    <svg 
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="mb.Raumtrend"
    >
      <defs>
        <linearGradient id="iconRoofGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={accentColor} stopOpacity="1" />
          <stop offset="100%" stopColor={accentColor} stopOpacity="0.85" />
        </linearGradient>
        <filter id="iconShadow">
          <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.2"/>
        </filter>
      </defs>

      {/* House body */}
      <rect 
        x="10" 
        y="32" 
        width="42" 
        height="38" 
        rx="3" 
        fill={primaryColor}
        filter="url(#iconShadow)"
      />
      
      {/* Roof */}
      <path 
        d="M5 38 L31 14 L57 38" 
        stroke="url(#iconRoofGradient)" 
        strokeWidth="6" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
      
      {/* Arrow */}
      <path 
        d="M38 40 L60 40 L60 30 L76 45 L60 60 L60 50 L38 50 Z" 
        fill={accentColor}
        filter="url(#iconShadow)"
      />
      
      {/* Arrow highlight */}
      <path 
        d="M63 42 L70 45 L63 48" 
        stroke={variant === "white" ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.35)"} 
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Window */}
      <rect 
        x="22" 
        y="46" 
        width="18" 
        height="16" 
        rx="2" 
        fill={variant === "white" ? "rgba(26, 46, 74, 0.95)" : "rgba(255, 255, 255, 0.95)"}
      />
      
      {/* Window frame details */}
      <line 
        x1="31" y1="46" x2="31" y2="62" 
        stroke={variant === "white" ? "rgba(255,255,255,0.2)" : "rgba(26, 46, 74, 0.2)"} 
        strokeWidth="1.5"
      />
      <line 
        x1="22" y1="54" x2="40" y2="54" 
        stroke={variant === "white" ? "rgba(255,255,255,0.2)" : "rgba(26, 46, 74, 0.2)"} 
        strokeWidth="1.5"
      />
    </svg>
  )
}
