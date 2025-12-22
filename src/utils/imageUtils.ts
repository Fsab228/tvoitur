// Утилита для работы с изображениями
// Использует локальные изображения из public/images, если они есть
// Иначе использует изображения с pegast.ru

export const getImageUrl = (path: string): string => {
  // Пытаемся использовать локальное изображение
  const localPath = `/images/${path}`
  
  // В продакшене можно проверить существование файла
  // Пока используем прямую ссылку на pegast.ru для изображений туров
  if (path.startsWith('http')) {
    return path
  }
  
  // Для локальных изображений (логотип, иконки)
  return localPath
}

// Функция для получения URL изображения тура с pegast.ru
export const getTourImageUrl = (tourId: string, imageName?: string): string => {
  // Если изображение уже полный URL, возвращаем его
  if (imageName && imageName.startsWith('http')) {
    return imageName
  }
  
  // Иначе используем путь к локальному изображению
  return `/images/tours/${tourId}${imageName ? `_${imageName}` : ''}.jpg`
}

