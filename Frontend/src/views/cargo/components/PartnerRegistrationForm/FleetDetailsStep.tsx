// Fleet Details Step
import { useState } from 'react';
import standardTractorIcon from '@/assets/images/standard-tractor-unit.svg';
import threeAxleTractorIcon from '@/assets/images/three-axle-tractor-unit.svg';
import megaTractorIcon from '@/assets/images/mega-tractor-unit.svg';
import megaTractorAdjustableIcon from '@/assets/images/mega-tractor-unit-adjustable-5th-wheel.svg';
import curtainSidedTrailerIcon from '@/assets/images/curtain-sided-trailer.svg';
import megaCurtainSidedTrailerIcon from '@/assets/images/mega-curtain-sided-trailer.svg';
import boxTrailerIcon from '@/assets/images/box-trailer.svg';
import frigoTrailerIcon from '@/assets/images/frigo-trailer.svg';
import coilTrailerIcon from '@/assets/images/coil-trailer.svg';
import paperlinerIcon from '@/assets/images/paperliner.svg';
import doubleDeckTrailerIcon from '@/assets/images/double-deck-trailer.svg';
import jumboRoadTrainIcon from '@/assets/images/jumbo-road-train.svg';

interface FleetDetailsStepProps {
  fleet: any;
  updateFleetData: (fleetType: string, value: number) => void;
  onNext: () => void;
  onPrevious: () => void;
}

interface FleetItemProps {
  icon: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const FleetItem = ({ icon, label, value, onChange }: FleetItemProps) => {
  const increment = () => onChange(value + 1);
  const decrement = () => onChange(Math.max(0, value - 1));

  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-200">
      <div className="flex items-center gap-2 flex-1">
        <img src={icon} alt={label} className="w-8 h-8 object-contain" />
        <span className="text-xs sm:text-sm text-slate-700">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={decrement}
          className="w-7 h-7 flex items-center justify-center border border-slate-300 hover:bg-slate-100 transition-colors text-sm"
          type="button"
        >
          <i className="ri-subtract-line"></i>
        </button>
        <span className="w-10 text-center font-semibold text-slate-900 text-sm">{value}</span>
        <button
          onClick={increment}
          className="w-7 h-7 flex items-center justify-center border border-slate-300 hover:bg-slate-100 transition-colors text-sm"
          type="button"
        >
          <i className="ri-add-line"></i>
        </button>
      </div>
    </div>
  );
};

export const FleetDetailsStep = ({ fleet, updateFleetData, onNext, onPrevious }: FleetDetailsStepProps) => {
  const [error, setError] = useState('');

  const validateFleet = () => {
    // Check if at least one vehicle type is selected
    const hasFleet = Object.values(fleet).some((value) => (value as number) > 0);
    
    if (!hasFleet) {
      setError('Please indicate the number of vehicle types available.');
      return false;
    }
    
    setError('');
    return true;
  };

  const handleNext = () => {
    if (validateFleet()) {
      onNext();
    }
  };

  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <button
            onClick={onPrevious}
            className="text-blue-600 hover:text-blue-800 flex items-center text-xs font-medium"
          >
            <i className="ri-arrow-left-line mr-1"></i>
            Previous page
          </button>
        </div>
        <h2 className="text-xl font-bold text-slate-900 mb-1">Own Fleet</h2>
        <p className="text-xs text-slate-600 mb-1">Please indicate the number of vehicle types available.*</p>
        <p className="text-xs text-slate-500">* Mandatory field</p>
        {error && (
          <div className="mt-2 p-2 bg-red-50 border border-red-200 rounded">
            <p className="text-red-600 text-xs font-medium">{error}</p>
          </div>
        )}
      </div>

      {/* Two Column Layout for Tractor Units and Trailers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
        {/* Tractor Units - Left Column */}
        <div>
          <h3 className="text-sm font-semibold text-slate-800 mb-2">Tractor units</h3>
          <div className="space-y-0">
            <FleetItem
              icon={standardTractorIcon}
              label="Standard tractor unit"
              value={fleet.standardTractor}
              onChange={(val) => updateFleetData('standardTractor', val)}
            />
            <FleetItem
              icon={threeAxleTractorIcon}
              label="Three-axle tractor unit"
              value={fleet.threeAxleTractor}
              onChange={(val) => updateFleetData('threeAxleTractor', val)}
            />
            <FleetItem
              icon={megaTractorIcon}
              label="Mega tractor unit"
              value={fleet.megaTractor}
              onChange={(val) => updateFleetData('megaTractor', val)}
            />
            <FleetItem
              icon={megaTractorAdjustableIcon}
              label="Mega tractor unit (adjustable plate)"
              value={fleet.megaTractorAdjustable}
              onChange={(val) => updateFleetData('megaTractorAdjustable', val)}
            />
          </div>
        </div>

        {/* Trailers - Right Column */}
        <div>
          <h3 className="text-sm font-semibold text-slate-800 mb-2">Trailer</h3>
          <div className="space-y-0">
            <FleetItem
              icon={curtainSidedTrailerIcon}
              label="Curtain-sided trailer"
              value={fleet.curtainSidedTrailer}
              onChange={(val) => updateFleetData('curtainSidedTrailer', val)}
            />
            <FleetItem
              icon={megaCurtainSidedTrailerIcon}
              label="Mega Curtain-sided trailer"
              value={fleet.megaCurtainSidedTrailer}
              onChange={(val) => updateFleetData('megaCurtainSidedTrailer', val)}
            />
            <FleetItem
              icon={boxTrailerIcon}
              label="Box trailer"
              value={fleet.boxTrailer}
              onChange={(val) => updateFleetData('boxTrailer', val)}
            />
            <FleetItem
              icon={frigoTrailerIcon}
              label="Frigo"
              value={fleet.frigo}
              onChange={(val) => updateFleetData('frigo', val)}
            />
            <FleetItem
              icon={coilTrailerIcon}
              label="Coil skip trailer"
              value={fleet.coilSkipTrailer}
              onChange={(val) => updateFleetData('coilSkipTrailer', val)}
            />
            <FleetItem
              icon={paperlinerIcon}
              label="Paperliner"
              value={fleet.paperliner}
              onChange={(val) => updateFleetData('paperliner', val)}
            />
            <FleetItem
              icon={doubleDeckTrailerIcon}
              label="Double-deck trailer"
              value={fleet.doubleDeckTrailer}
              onChange={(val) => updateFleetData('doubleDeckTrailer', val)}
            />
          </div>
        </div>
      </div>

      {/* Miscellaneous - Full Width Below */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-slate-800 mb-2">Miscellaneous</h3>
        <div className="space-y-0">
          <FleetItem
            icon={jumboRoadTrainIcon}
            label="Jumbo road train"
            value={fleet.jumboRoadTrain}
            onChange={(val) => updateFleetData('jumboRoadTrain', val)}
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-3 mt-6">
        <button
          onClick={onPrevious}
          className="px-6 py-2 text-sm border-2 border-slate-300 text-slate-700 font-semibold hover:bg-slate-50 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-6 py-2 text-sm bg-blue-700 text-white font-semibold hover:bg-blue-800 transition-colors flex items-center"
        >
          Next
          <i className="ri-arrow-right-line ml-2"></i>
        </button>
      </div>
    </div>
  );
};
