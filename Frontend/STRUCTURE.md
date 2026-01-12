# Codebase Structure

## New Modular Architecture (View-Model-Data)

The codebase has been restructured following a professional **View-Model-Data (VMD)** architecture pattern for better organization, maintainability, and scalability.

## Directory Structure

```
src/
├── views/                          # 🎨 VIEW LAYER - UI Components Only
│   ├── home/
│   │   ├── HomePage.tsx           # Main home page view
│   │   └── components/            # Home page sub-components
│   │       ├── HeroSection/
│   │       ├── ServicesOverview/
│   │       ├── CapacitySection/
│   │       ├── TrustIndicators/
│   │       ├── WhyChooseUs/
│   │       ├── CareersTeaser/
│   │       ├── QuickQuote/
│   │       └── StatsBar/
│   ├── shared/                     # Shared UI components
│   │   └── Footer/
│   └── not-found/
│       └── NotFoundPage.tsx
│
├── viewmodels/                      # 🧠 MODEL LAYER - Business Logic
│   └── home/
│       ├── useHomeViewModel.ts     # Home page business logic
│       └── useQuoteViewModel.ts    # Quote form logic
│
├── data/                           # 💾 DATA LAYER - API & Services
│   └── services/
│       ├── imageService.ts         # Image URL management
│       └── quoteService.ts         # Quote API calls
│
├── models/                         # 📋 Type Definitions
│   └── types/
│       └── index.ts                # TypeScript interfaces
│
├── hooks/                          # 🪝 Custom React Hooks
│   ├── useScroll.ts                # Scroll detection
│   └── useNavigation.ts            # Navigation handlers
│
├── utils/                          # 🔧 Utility Functions
│   └── scroll.ts                   # Scroll utilities
│
├── constants/                      # 📌 Constants
│   ├── index.ts                    # General constants
│   └── home.ts                     # Home page constants
│
├── router/                         # 🛣️ Routing
│   ├── config.tsx                  # Route definitions
│   └── index.ts                    # Router setup
│
└── i18n/                           # 🌐 Internationalization
    ├── index.ts
    └── local/
```

## Key Changes

### ✅ Before → After

**Old Structure:**
```
src/
├── pages/
│   └── home/
│       ├── page.tsx
│       └── components/
├── components/
│   └── feature/
```

**New Structure:**
```
src/
├── views/              # UI components
├── viewmodels/         # Business logic
├── data/              # API services
├── models/            # Type definitions
├── hooks/             # Reusable hooks
├── utils/             # Utilities
└── constants/         # Constants
```

## Benefits

1. **Clear Separation of Concerns**: UI, logic, and data are separated
2. **Easy to Navigate**: Know exactly where to find code
3. **Better Testability**: Test business logic independently
4. **Scalable**: Easy to add new features
5. **Maintainable**: Changes are localized to specific layers
6. **Professional**: Industry-standard architecture pattern

## Migration Notes

- All old files in `src/pages/` and `src/components/` have been moved to `src/views/`
- Business logic extracted to `src/viewmodels/`
- API calls moved to `src/data/services/`
- Constants centralized in `src/constants/`
- Types defined in `src/models/types/`

## Next Steps

When adding new features:

1. **Create View** in `src/views/[feature]/`
2. **Create ViewModel** in `src/viewmodels/[feature]/`
3. **Create Data Service** in `src/data/services/`
4. **Define Types** in `src/models/types/`
5. **Add Constants** in `src/constants/`

See `ARCHITECTURE.md` for detailed documentation.
