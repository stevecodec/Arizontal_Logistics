# Architecture Documentation

## Overview

This codebase follows a **View-Model-Data (VMD)** architecture pattern, which separates concerns into three distinct layers:

- **Views**: Presentation layer (UI components)
- **ViewModels**: Business logic and state management
- **Data**: Data access layer (API calls, services)

## Directory Structure

```
src/
├── views/                    # Presentation Layer (UI Components)
│   ├── home/                # Home page views
│   │   ├── HomePage.tsx     # Main home page component
│   │   └── components/      # Home page sub-components
│   │       ├── HeroSection/
│   │       ├── ServicesOverview/
│   │       ├── CapacitySection/
│   │       ├── TrustIndicators/
│   │       ├── WhyChooseUs/
│   │       ├── CareersTeaser/
│   │       ├── QuickQuote/
│   │       └── StatsBar/
│   ├── shared/              # Shared UI components
│   │   └── Footer/
│   └── not-found/           # 404 page
│
├── viewmodels/              # Business Logic Layer
│   └── home/
│       ├── useHomeViewModel.ts    # Home page business logic
│       └── useQuoteViewModel.ts   # Quote form business logic
│
├── data/                    # Data Access Layer
│   └── services/
│       ├── imageService.ts        # Image URL management
│       └── quoteService.ts        # Quote API calls
│
├── models/                  # Data Models & Types
│   └── types/
│       └── index.ts         # TypeScript type definitions
│
├── hooks/                  # Custom React Hooks
│   ├── useScroll.ts        # Scroll detection hook
│   └── useNavigation.ts    # Navigation handlers hook
│
├── utils/                  # Utility Functions
│   └── scroll.ts           # Scroll utility functions
│
├── constants/              # Application Constants
│   ├── index.ts            # General constants
│   └── home.ts             # Home page constants
│
├── router/                 # Routing Configuration
│   ├── config.tsx          # Route definitions
│   └── index.ts            # Router setup
│
└── i18n/                   # Internationalization
    ├── index.ts            # i18n configuration
    └── local/              # Translation files
```

## Architecture Layers

### 1. Views Layer (`src/views/`)

**Purpose**: Contains all UI components (presentation only)

**Responsibilities**:
- Render UI based on props and state from ViewModels
- Handle user interactions (clicks, form inputs)
- Display data from ViewModels
- No business logic or API calls

**Example**:
```tsx
// views/home/components/HeroSection/HeroSection.tsx
import { useScroll } from '../../../hooks/useScroll';
import { useNavigation } from '../../../hooks/useNavigation';

export const HeroSection = () => {
  const scrolled = useScroll();
  const { handleGetQuote } = useNavigation();
  
  return <div>...</div>;
};
```

### 2. ViewModels Layer (`src/viewmodels/`)

**Purpose**: Contains business logic and state management

**Responsibilities**:
- Manage component state
- Handle business logic
- Coordinate data fetching from Data layer
- Transform data for Views
- Handle form validation and submission logic

**Example**:
```tsx
// viewmodels/home/useQuoteViewModel.ts
export const useQuoteViewModel = () => {
  const [formData, setFormData] = useState<QuoteFormData>({...});
  
  const handleSubmit = async (e: React.FormEvent) => {
    // Business logic here
    await submitQuoteRequest(formData);
  };
  
  return { formData, handleSubmit, ... };
};
```

### 3. Data Layer (`src/data/`)

**Purpose**: Handles all data access and external API calls

**Responsibilities**:
- API calls to backend services
- Data fetching and caching
- External service integrations
- Data transformation for ViewModels

**Example**:
```tsx
// data/services/quoteService.ts
export const submitQuoteRequest = async (
  formData: QuoteFormData
): Promise<QuoteResponse> => {
  // API call logic here
  return response.json();
};
```

## Supporting Layers

### Models (`src/models/`)

TypeScript type definitions and interfaces for data structures.

### Hooks (`src/hooks/`)

Reusable React hooks that encapsulate common logic.

### Utils (`src/utils/`)

Pure utility functions (no React dependencies).

### Constants (`src/constants/`)

Application-wide constants and configuration values.

## Data Flow

```
User Interaction
    ↓
View Component (handles UI event)
    ↓
ViewModel Hook (processes business logic)
    ↓
Data Service (makes API call)
    ↓
ViewModel (transforms response)
    ↓
View Component (displays updated state)
```

## Benefits of This Architecture

1. **Separation of Concerns**: Each layer has a single, well-defined responsibility
2. **Testability**: Business logic can be tested independently of UI
3. **Reusability**: ViewModels and Data services can be reused across different Views
4. **Maintainability**: Easy to locate and fix bugs
5. **Scalability**: Easy to add new features without affecting existing code
6. **Team Collaboration**: Different developers can work on different layers simultaneously

## Best Practices

1. **Views should be "dumb"**: They should only render UI and delegate logic to ViewModels
2. **ViewModels should be "smart"**: They contain all business logic and state management
3. **Data layer should be "pure"**: No UI dependencies, only data operations
4. **Use TypeScript types**: Define types in `models/types` and use them throughout
5. **Keep constants centralized**: Store all constants in `constants/` directory
6. **Reusable logic in hooks**: Extract common logic into custom hooks

## Adding New Features

### Example: Adding a Contact Form

1. **Create Model** (`src/models/types/index.ts`):
```tsx
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
```

2. **Create ViewModel** (`src/viewmodels/contact/useContactViewModel.ts`):
```tsx
export const useContactViewModel = () => {
  // Business logic here
};
```

3. **Create Data Service** (`src/data/services/contactService.ts`):
```tsx
export const submitContactForm = async (data: ContactFormData) => {
  // API call here
};
```

4. **Create View** (`src/views/contact/ContactForm.tsx`):
```tsx
export const ContactForm = () => {
  const viewModel = useContactViewModel();
  // UI rendering here
};
```

## File Naming Conventions

- **Components**: PascalCase (e.g., `HeroSection.tsx`)
- **Hooks**: camelCase starting with "use" (e.g., `useScroll.ts`)
- **Utils**: camelCase (e.g., `scroll.ts`)
- **Services**: camelCase ending with "Service" (e.g., `quoteService.ts`)
- **Types**: PascalCase (e.g., `QuoteFormData`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `SECTION_IDS`)
