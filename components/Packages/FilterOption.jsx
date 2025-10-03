"use client";

import { useState, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  Star,
  X,
  Building,
  Utensils,
  MapPin,
  Award,
  Zap,
  Wifi,
  Car,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const FilterSection = ({ title, icon: Icon, children, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="-mx-3 flex w-full items-center justify-between rounded-lg px-3 py-4 text-left transition-all duration-300 hover:bg-gray-50"
      >
        <div className="flex items-center space-x-2">
          <Icon className="text-primary h-4 w-4" />
          <span className="font-poppins text-sm font-semibold text-gray-800">
            {title}
          </span>
        </div>
        <ChevronDown
          className={`h-4 w-4 transform text-gray-500 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="space-y-3 pb-3 text-sm text-gray-600">{children}</div>
      </div>
    </div>
  );
};

const CheckboxItem = ({ children, checked = false, onChange }) => (
  <label className="group flex cursor-pointer items-center space-x-3 rounded-lg px-2 py-2 transition-all duration-200 hover:scale-105 hover:bg-blue-50">
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="text-primary focus:ring-primary h-4 w-4 rounded border-gray-300 transition-all duration-200 focus:ring-2 focus:ring-offset-1"
      />
      <div className="group-hover:border-primary/20 absolute inset-0 rounded border-2 border-transparent transition-colors duration-200"></div>
    </div>
    <span className="font-poppins text-sm text-gray-700 transition-colors duration-200 group-hover:text-gray-900">
      {children}
    </span>
  </label>
);

const StarRating = ({ rating, active = false, onChange }) => (
  <label className="group flex cursor-pointer items-center space-x-3 rounded-lg px-2 py-2 transition-all duration-200 hover:scale-105 hover:bg-yellow-50">
    <div className="relative">
      <input
        type="checkbox"
        checked={active}
        onChange={onChange}
        className="h-4 w-4 rounded border-gray-300 text-yellow-500 focus:ring-2 focus:ring-yellow-500 focus:ring-offset-1"
      />
      <div className="absolute inset-0 rounded border-2 border-transparent transition-colors duration-200 group-hover:border-yellow-500/20"></div>
    </div>
    <div className="flex space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          } transition-colors duration-200`}
        />
      ))}
    </div>
    <span className="font-poppins text-xs text-gray-500 transition-colors duration-200 group-hover:text-gray-700">
      & above
    </span>
  </label>
);

const RangeSlider = ({ min, max, value, onChange, step = 1, label }) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (newValue) => {
    setLocalValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-poppins text-sm font-medium text-gray-700">
          {label}: {localValue}
          {label === "Price" ? "$" : "km"}
        </span>
      </div>
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue}
          onChange={(e) => handleChange(parseInt(e.target.value))}
          className="[&::-webkit-slider-thumb]:bg-primary h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
        />
        <div className="absolute top-0 right-0 left-0 -z-10 h-2 rounded-lg bg-gray-200">
          <div
            className="bg-primary h-2 rounded-lg transition-all duration-300"
            style={{
              width: `${((localValue - min) / (max - min)) * 100}%`,
            }}
          />
        </div>
      </div>
      <div className="flex justify-between text-xs text-gray-500">
        <span>
          {min}
          {label === "Price" ? "$" : "km"}
        </span>
        <span>
          {max}
          {label === "Price" ? "$" : "km"}
        </span>
      </div>
    </div>
  );
};

const DualRangeSlider = ({ min, max, value, onChange, step = 1, label }) => {
  const [localValue, setLocalValue] = useState(value);

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  const handleChange = (index, newValue) => {
    const newValues = [...localValue];
    newValues[index] = newValue;

    // Ensure min doesn't exceed max and vice versa
    if (index === 0 && newValue > localValue[1]) {
      newValues[1] = newValue;
    } else if (index === 1 && newValue < localValue[0]) {
      newValues[0] = newValue;
    }

    setLocalValue(newValues);
    onChange(newValues);
  };

  const progressLeft = ((localValue[0] - min) / (max - min)) * 100;
  const progressWidth = ((localValue[1] - localValue[0]) / (max - min)) * 100;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-poppins text-sm font-medium text-gray-700">
          {label}: {localValue[0]}$ - {localValue[1]}$
        </span>
      </div>

      <div className="relative py-4">
        {/* Track */}
        <div className="relative h-2 rounded-lg bg-gray-200">
          {/* Progress */}
          <div
            className="bg-primary absolute top-0 h-2 rounded-lg transition-all duration-300"
            style={{
              left: `${progressLeft}%`,
              width: `${progressWidth}%`,
            }}
          />
        </div>

        {/* Thumb for min value */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[0]}
          onChange={(e) => handleChange(0, parseInt(e.target.value))}
          className="absolute top-0 left-0 z-20 h-2 w-full cursor-pointer opacity-0"
        />

        {/* Thumb for max value */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={localValue[1]}
          onChange={(e) => handleChange(1, parseInt(e.target.value))}
          className="absolute top-0 left-0 z-20 h-2 w-full cursor-pointer opacity-0"
        />

        {/* Custom Thumbs */}
        <div
          className="border-primary absolute top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full border-2 bg-white shadow-lg transition-transform hover:scale-125"
          style={{ left: `${progressLeft}%` }}
        />
        <div
          className="border-primary absolute top-1/2 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full border-2 bg-white shadow-lg transition-transform hover:scale-125"
          style={{ left: `${progressLeft + progressWidth}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>{min}$</span>
        <span>{max}$</span>
      </div>
    </div>
  );
};

const FilterOptions = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    popular: [],
    hotelTypes: [],
    amenities: [],
    reviews: [],
    brands: [],
    cuisine: [],
    mealPlans: [],
    styles: [],
  });

  const [priceRange, setPriceRange] = useState([200, 5695]);
  const [distance, setDistance] = useState(25);
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const resetFilters = () => {
    setSelectedFilters({
      popular: [],
      hotelTypes: [],
      amenities: [],
      reviews: [],
      brands: [],
      cuisine: [],
      mealPlans: [],
      styles: [],
    });
    setPriceRange([200, 5695]);
    setDistance(25);
    setSearchQuery("");
  };

  const getActiveFilterCount = () => {
    return (
      Object.values(selectedFilters).flat().length +
      (priceRange[0] > 200 || priceRange[1] < 5695 ? 1 : 0) +
      (distance !== 25 ? 1 : 0) +
      (searchQuery ? 1 : 0)
    );
  };

  const activeFilterCount = getActiveFilterCount();

  return (
    <aside className="sticky top-4 w-full rounded-2xl border border-gray-100 bg-white transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between rounded-t-2xl border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white px-6 py-4">
        <div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
            <h5 className="font-poppins text-lg leading-6 font-[500]">
              Filters
            </h5>
          </div>

          {activeFilterCount > 0 && (
            <p className="font-poppins text-primary mt-1 text-xs font-medium">
              {activeFilterCount} active filter{activeFilterCount !== 1 && "s"}
            </p>
          )}
        </div>
        <button
          onClick={resetFilters}
          className="font-poppins text-primary hover:text-primary-hover bg-primary/5 hover:bg-primary/10 flex items-center space-x-1 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105"
        >
          <X className="h-4 w-4" />
          <span>Reset</span>
        </button>
      </div>

      {/* Body */}
      <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
        {/* Search Hotel */}
        <div className="mb-6">
          <label className="font-poppins mb-3 block text-sm font-semibold text-gray-800">
            Search by Hotel Name
          </label>
          <div className="relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400 transition-colors duration-200" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Hotel Name"
              className="font-poppins focus:border-primary focus:ring-primary focus:ring-opacity-20 w-full rounded-xl border border-gray-200 bg-white py-3 pr-4 pl-10 text-sm text-gray-900 placeholder-gray-500 transition-all duration-300 hover:border-gray-300 focus:ring-2"
            />
          </div>
        </div>

        {/* Accordion Filters */}
        <div className="space-y-1">
          {/* Popular */}
          <FilterSection title="Popular" icon={Award} isOpen={true}>
            {[
              "Breakfast Included",
              "Budget",
              "4 Star Hotels",
              "5 Star Hotels",
            ].map((item) => (
              <CheckboxItem
                key={item}
                checked={selectedFilters.popular.includes(item)}
                onChange={() => handleFilterChange("popular", item)}
              >
                {item}
              </CheckboxItem>
            ))}
          </FilterSection>

          {/* Price Range */}
          <FilterSection title="Price Per Night" icon={Zap}>
            <DualRangeSlider
              min={200}
              max={5695}
              value={priceRange}
              onChange={setPriceRange}
              label="Price"
            />
          </FilterSection>

          {/* Hotel Types */}
          <FilterSection title="Hotel Types" icon={Building}>
            {[
              "Hotels",
              "Aparthotel",
              "Villa",
              "Apartment",
              "Private Vacation Home",
              "Guest House",
              "Lodge",
              "Resort",
            ].map((type) => (
              <CheckboxItem
                key={type}
                checked={selectedFilters.hotelTypes.includes(type)}
                onChange={() => handleFilterChange("hotelTypes", type)}
              >
                {type}
              </CheckboxItem>
            ))}
          </FilterSection>

          {/* Amenities */}
          <FilterSection title="Amenities" icon={Sparkles}>
            {[
              "Free Wifi",
              "Breakfast Included",
              "Pool",
              "Free Parking",
              "Spa",
              "Gym",
              "Ocean View",
              "Restaurant",
              "Bar",
              "Air Conditioning",
            ].map((item) => (
              <CheckboxItem
                key={item}
                checked={selectedFilters.amenities.includes(item)}
                onChange={() => handleFilterChange("amenities", item)}
              >
                {item}
              </CheckboxItem>
            ))}
          </FilterSection>

          {/* Distance */}
          <FilterSection title="Distance" icon={MapPin}>
            <RangeSlider
              min={0}
              max={100}
              value={distance}
              onChange={setDistance}
              step={5}
              label="Distance"
            />
          </FilterSection>

          {/* Cuisine */}
          <FilterSection title="Cuisine" icon={Utensils}>
            {[
              "American",
              "Chinese",
              "Italian",
              "Mexican",
              "Indian",
              "Australian",
              "French",
              "Japanese",
            ].map((cuisine) => (
              <CheckboxItem
                key={cuisine}
                checked={selectedFilters.cuisine.includes(cuisine)}
                onChange={() => handleFilterChange("cuisine", cuisine)}
              >
                {cuisine}
              </CheckboxItem>
            ))}
          </FilterSection>

          {/* Meal Plans */}
          <FilterSection title="Meal Plans Available" icon={Utensils}>
            {[
              "All Inclusive",
              "Breakfast",
              "Lunch",
              "Dinner",
              "Half Board",
              "Full Board",
            ].map((plan) => (
              <CheckboxItem
                key={plan}
                checked={selectedFilters.mealPlans.includes(plan)}
                onChange={() => handleFilterChange("mealPlans", plan)}
              >
                {plan}
              </CheckboxItem>
            ))}
          </FilterSection>

          {/* Style */}
          <FilterSection title="Style" icon={Award}>
            {[
              "Budget",
              "Midrange",
              "Luxury",
              "Family Friendly",
              "Business",
              "Romantic",
              "Modern",
              "Boutique",
            ].map((style) => (
              <CheckboxItem
                key={style}
                checked={selectedFilters.styles.includes(style)}
                onChange={() => handleFilterChange("styles", style)}
              >
                {style}
              </CheckboxItem>
            ))}
          </FilterSection>

          {/* Reviews */}
          <FilterSection title="Reviews" icon={Star}>
            {[5, 4, 3, 2, 1].map((rating) => (
              <StarRating
                key={rating}
                rating={rating}
                active={selectedFilters.reviews.includes(rating)}
                onChange={() => handleFilterChange("reviews", rating)}
              />
            ))}
          </FilterSection>

          {/* Brands */}
          <FilterSection title="Brands" icon={Building}>
            {[
              "OYO",
              "Fab Hotels",
              "Treebo",
              "The Park Hotels",
              "Hotel Taj",
              "Raddisson",
              "Marriott",
              "Hilton",
            ].map((brand) => (
              <CheckboxItem
                key={brand}
                checked={selectedFilters.brands.includes(brand)}
                onChange={() => handleFilterChange("brands", brand)}
              >
                {brand}
              </CheckboxItem>
            ))}
          </FilterSection>
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="rounded-b-2xl border-t border-gray-100 bg-gray-50 px-6 py-4">
        <button className="bg-primary-gradient hover:shadow-primary/25 font-poppins w-full transform rounded-xl px-4 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Apply Filters
        </button>
      </div>
    </aside>
  );
};

export default FilterOptions;
