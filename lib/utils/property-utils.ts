import propertiesData from '../data/properties.json';

export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  beds: number;
  baths: number;
  area: string;
  type: string;
  imageUrl: string;
  features: string[];
  areaLocation: string;
  dealType: string;
  tags?: string[]; // Метки: 'new-development', 'featured', 'rent'
  completionDate?: string; // Дата завершения строительства для новостроек
  annualReturn?: string; // Годовая доходность
  paybackPeriod?: string; // Срок окупаемости
  description?: string; // Описание объекта
}

export const getAllProperties = (): Property[] => {
  return propertiesData.properties;
};

export const getPropertyById = (id: number): Property | undefined => {
  return propertiesData.properties.find(property => property.id === id);
};

export const filterProperties = (filters: {
  type?: string[];
  areaLocation?: string[];
  dealType?: string[];
  features?: string[];
  minBeds?: number;
  minBaths?: number;
  tags?: string[];
}): Property[] => {
  return propertiesData.properties.filter(property => {
    // Filter by property type
    if (filters.type && filters.type.length > 0 && !filters.type.includes(property.type)) {
      return false;
    }
    
    // Filter by area location
    if (filters.areaLocation && filters.areaLocation.length > 0 && !filters.areaLocation.includes(property.areaLocation)) {
      return false;
    }
    
    // Filter by deal type
    if (filters.dealType && filters.dealType.length > 0 && !filters.dealType.includes(property.dealType)) {
      return false;
    }
    
    // Filter by features
    if (filters.features && filters.features.length > 0) {
      const hasAllFeatures = filters.features.every(feature => property.features.includes(feature));
      if (!hasAllFeatures) {
        return false;
      }
    }
    
    // Filter by minimum number of bedrooms
    if (filters.minBeds !== undefined && property.beds < filters.minBeds) {
      return false;
    }
    
    // Filter by minimum number of bathrooms
    if (filters.minBaths !== undefined && property.baths < filters.minBaths) {
      return false;
    }
    
    // Filter by tags
    if (filters.tags && filters.tags.length > 0) {
      // Если у объекта нет тегов или нет ни одного из запрошенных тегов, исключаем его
      if (!property.tags || !filters.tags.some(tag => property.tags?.includes(tag))) {
        return false;
      }
    }
    
    return true;
  });
};
