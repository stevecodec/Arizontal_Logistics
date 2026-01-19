// Trust Indicators Component (View Layer)

import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import { Icon, DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getImageUrl } from '@/data/services/imageService';

// Custom small pin icon for operational cities
const cityPinIcon = new DivIcon({
  className: 'custom-city-pin',
  html: '<div style="width: 10px; height: 10px; background-color: #FF6B35; border: 2px solid white; border-radius: 50%; box-shadow: 0 2px 4px rgba(0,0,0,0.3);"></div>',
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

// Custom larger pin for head office
const headquartersPinIcon = new Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  shadowSize: [41, 41],
});

// Operational cities across North America
const OPERATIONAL_CITIES = [
  // East Coast
  { position: [35.2271, -80.8431] as [number, number], name: 'Charlotte, NC', isHQ: true },
  { position: [40.7128, -74.0060] as [number, number], name: 'New York, NY' },
  { position: [42.3601, -71.0589] as [number, number], name: 'Boston, MA' },
  { position: [39.9526, -75.1652] as [number, number], name: 'Philadelphia, PA' },
  { position: [38.9072, -77.0369] as [number, number], name: 'Washington, DC' },
  { position: [33.7490, -84.3880] as [number, number], name: 'Atlanta, GA' },
  { position: [25.7617, -80.1918] as [number, number], name: 'Miami, FL' },
  { position: [35.7796, -78.6382] as [number, number], name: 'Raleigh, NC' },
  
  // South
  { position: [29.7604, -95.3698] as [number, number], name: 'Houston, TX' },
  { position: [32.7767, -96.7970] as [number, number], name: 'Dallas, TX' },
  { position: [29.4241, -98.4936] as [number, number], name: 'San Antonio, TX' },
  { position: [30.2672, -97.7431] as [number, number], name: 'Austin, TX' },
  { position: [35.4676, -97.5164] as [number, number], name: 'Oklahoma City, OK' },
  { position: [30.3322, -81.6557] as [number, number], name: 'Jacksonville, FL' },
  
  // Midwest
  { position: [41.8781, -87.6298] as [number, number], name: 'Chicago, IL' },
  { position: [39.7392, -104.9903] as [number, number], name: 'Denver, CO' },
  { position: [39.0997, -94.5786] as [number, number], name: 'Kansas City, MO' },
  { position: [44.9778, -93.2650] as [number, number], name: 'Minneapolis, MN' },
  { position: [41.2565, -95.9345] as [number, number], name: 'Omaha, NE' },
  { position: [39.7684, -86.1581] as [number, number], name: 'Indianapolis, IN' },
  { position: [38.6270, -90.1994] as [number, number], name: 'St. Louis, MO' },
  { position: [43.0389, -87.9065] as [number, number], name: 'Milwaukee, WI' },
  
  // West Coast
  { position: [34.0522, -118.2437] as [number, number], name: 'Los Angeles, CA' },
  { position: [37.7749, -122.4194] as [number, number], name: 'San Francisco, CA' },
  { position: [47.6062, -122.3321] as [number, number], name: 'Seattle, WA' },
  { position: [45.5152, -122.6784] as [number, number], name: 'Portland, OR' },
  { position: [33.4484, -112.0740] as [number, number], name: 'Phoenix, AZ' },
  { position: [36.1699, -115.1398] as [number, number], name: 'Las Vegas, NV' },
  { position: [32.7157, -117.1611] as [number, number], name: 'San Diego, CA' },
  { position: [40.7608, -111.8910] as [number, number], name: 'Salt Lake City, UT' },
];

export const TrustIndicators = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Fixed Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={getImageUrl('overlay1')}
          alt="Truck on Highway"
          className="w-full h-full object-cover fixed top-0 left-0"
          style={{ zIndex: -1 }}
        />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-xl lg:text-2xl font-bold text-white mb-2">
              Our Shipping Network
            </h2>
            <div className="mx-auto h-1 w-24 rounded-full bg-theme-primary"></div>
          </div>

          {/* Map Container */}
          <div className="relative w-full h-[500px] bg-slate-900/40 backdrop-blur-sm rounded overflow-hidden shadow-2xl">
            <MapContainer
              center={[39.8283, -98.5795]} // Center of USA
              zoom={4}
              scrollWheelZoom={false}
              dragging={false}
              zoomControl={false}
              doubleClickZoom={false}
              touchZoom={false}
              boxZoom={false}
              keyboard={false}
              attributionControl={false}
              style={{ height: '100%', width: '100%' }}
              className="z-10"
            >
              <TileLayer
                attribution=''
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Operational City Markers */}
              {OPERATIONAL_CITIES.map((city, index) => (
                <Marker 
                  key={index} 
                  position={city.position} 
                  icon={city.isHQ ? headquartersPinIcon : cityPinIcon}
                >
                  <Tooltip 
                    direction="top" 
                    offset={[0, city.isHQ ? -35 : -5]}
                    opacity={0.95}
                    permanent={false}
                  >
                    <div className="text-xs font-semibold">
                      {city.name}
                      {city.isHQ && <div className="text-[10px] font-normal text-slate-600">Head Office</div>}
                    </div>
                  </Tooltip>
                </Marker>
              ))}
            </MapContainer>
            
            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-3 rounded shadow-lg z-[1000]">
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-[#FF6B35] rounded-full border-2 border-white shadow"></div>
                  <span className="text-slate-700">Operational Cities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white shadow"></div>
                  <span className="text-slate-700">Head Office (4037 E Independence Blvd, Suite 402, Charlotte)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
