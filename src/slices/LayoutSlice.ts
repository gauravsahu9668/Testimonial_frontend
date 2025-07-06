import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LayoutState {
  layout: string;  // "carousel"
  fullWidth: boolean;  // true
  customWidth: string;  // ""
  reviewsPerPage: number;  // 6
  reviewsPerPageMobile: number;  // 3
  reviewsSpacing: number;  // 16 (px)

  showLoadMoreButton: boolean;  // false
  widgetTitleEnabled: boolean;  // false
  title: string;  // "What Our Client Say"
  caption: string;  // "Caption..."

  bold: boolean;  // false
  italic: boolean;  // false
  reviewStyle: string;  // "card"
  showReviewerName: boolean;  // true
  showVerifiedBadge: boolean;  // true
  showReviewerPicture: boolean;  // true
  showCaption: boolean;  // true
  showDate: boolean;  // true
  showRating: boolean;  // true
  showImages: boolean;  // false
  showEmail: boolean;  // false

  reviewTextFullOrShort: string;  // "full"
  textLength: number;  // 150
  alignCardsByHeight: boolean;  // true

  colorScheme: string;  // "light"
  accentColor: string;  // "#2563eb"
  font: string;  // "Inter, sans-serif"

  backgroundColor: string;  // "#d1d5db"
  titleColor: string;  // "#000000"
  captionColor: string;  // "#6b7280"
  linkColor: string;  // "#2563eb"
  ratingColor: string;  // "#f59e0b"
  reviewBackgroundColor: string;  // "#ffffff"
  reviewOutlineColor: string;  // "#d1d5db"
  reviewTextColor: string;  // "#000000"
  readMoreColor: string;  // "#6b7280"
  reviewNameColor: string;  // "#000000"
  arrowBackgroundColor: string;  // "#1f2937"
  arrowColor: string;  // "#ffffff"
  arrowBackgroundColorHover: string;  // "#374151"
  arrowColorHover: string;  // "#ffffff"
  paginationColor: string;  // "#6b7280"
}

const initialState: LayoutState = {
  layout: "list",
  fullWidth: true,
  customWidth: "200",
  reviewsPerPage: 6,
  reviewsPerPageMobile: 3,
  reviewsSpacing: 16,

  showLoadMoreButton: true,
  widgetTitleEnabled: true,
  title: "What Our Client Say",
  caption: "Caption...",

  bold: false,
  italic: false,
  reviewStyle: "postcard",
  showReviewerName: true,
  showVerifiedBadge: true,
  showReviewerPicture: true,
  showCaption: false,
  showDate: true,
  showRating: true,
  showImages: true,
  showEmail: true,

  reviewTextFullOrShort: "full",
  textLength: 150,
  alignCardsByHeight: true,

  colorScheme: "Light",
  accentColor: "#3b82f6",
  font: "Default",

  backgroundColor: "#d1d5db",
  titleColor: "#000000",
  captionColor: "#6b7280",
  linkColor: "#2563eb",
  ratingColor: "#f59e0b",
  reviewBackgroundColor: "#ffffff",
  reviewOutlineColor: "#d1d5db",
  reviewTextColor: "#000000",
  readMoreColor: "#6b7280",
  reviewNameColor: "#000000",
  
  arrowBackgroundColor: "#1f2937",
  arrowColor: "#ffffff",
  arrowBackgroundColorHover: "#374151",
  arrowColorHover: "#ffffff",
  paginationColor: "#6b7280"
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLayout(state, action: PayloadAction<string>) { state.layout = action.payload; },
    setFullWidth(state, action: PayloadAction<boolean>) { state.fullWidth = action.payload; },
    setCustomWidth(state, action: PayloadAction<string>) { state.customWidth = action.payload; },
    setReviewsPerPage(state, action: PayloadAction<number>) { state.reviewsPerPage = action.payload; },
    setReviewsPerPageMobile(state, action: PayloadAction<number>) { state.reviewsPerPageMobile = action.payload; },
    setReviewsSpacing(state, action: PayloadAction<number>) { state.reviewsSpacing = action.payload; },

    setShowLoadMoreButton(state, action: PayloadAction<boolean>) { state.showLoadMoreButton = action.payload; },
    setWidgetTitleEnabled(state, action: PayloadAction<boolean>) { state.widgetTitleEnabled = action.payload; },
    setTitle(state, action: PayloadAction<string>) { state.title = action.payload; },
    setCaption(state, action: PayloadAction<string>) { state.caption = action.payload; },

    setBold(state, action: PayloadAction<boolean>) { state.bold = action.payload; },
    setItalic(state, action: PayloadAction<boolean>) { state.italic = action.payload; },
    setReviewStyle(state, action: PayloadAction<string>) { state.reviewStyle = action.payload; },
    setShowReviewerName(state, action: PayloadAction<boolean>) { state.showReviewerName = action.payload; },
    setShowVerifiedBadge(state, action: PayloadAction<boolean>) { state.showVerifiedBadge = action.payload; },
    setShowReviewerPicture(state, action: PayloadAction<boolean>) { state.showReviewerPicture = action.payload; },
    setShowCaption(state, action: PayloadAction<boolean>) { state.showCaption = action.payload; },
    setShowDate(state, action: PayloadAction<boolean>) { state.showDate = action.payload; },
    setShowRating(state, action: PayloadAction<boolean>) { state.showRating = action.payload; },
    setShowImages(state, action: PayloadAction<boolean>) { state.showImages = action.payload; },
    setShowLogo(state, action: PayloadAction<boolean>) { state.showEmail = action.payload; },

    setReviewTextFullOrShort(state, action: PayloadAction<string>) { state.reviewTextFullOrShort = action.payload; },
    setTextLength(state, action: PayloadAction<number>) { state.textLength = action.payload; },
    setAlignCardsByHeight(state, action: PayloadAction<boolean>) { state.alignCardsByHeight = action.payload; },

    setColorScheme(state, action: PayloadAction<string>) { state.colorScheme = action.payload; },
    setAccentColor(state, action: PayloadAction<string>) { state.accentColor = action.payload; },
    setFont(state, action: PayloadAction<string>) { state.font = action.payload; },

    setBackgroundColor(state, action: PayloadAction<string>) { state.backgroundColor = action.payload; },
    setTitleColor(state, action: PayloadAction<string>) { state.titleColor = action.payload; },
    setCaptionColor(state, action: PayloadAction<string>) { state.captionColor = action.payload; },
    setLinkColor(state, action: PayloadAction<string>) { state.linkColor = action.payload; },
    setRatingColor(state, action: PayloadAction<string>) { state.ratingColor = action.payload; },
    setReviewBackgroundColor(state, action: PayloadAction<string>) { state.reviewBackgroundColor = action.payload; },
    setReviewOutlineColor(state, action: PayloadAction<string>) { state.reviewOutlineColor = action.payload; },
    setReviewTextColor(state, action: PayloadAction<string>) { state.reviewTextColor = action.payload; },
    setReadMoreColor(state, action: PayloadAction<string>) { state.readMoreColor = action.payload; },
    setReviewNameColor(state, action: PayloadAction<string>) { state.reviewNameColor = action.payload; },

    setArrowBackgroundColor(state, action: PayloadAction<string>) { state.arrowBackgroundColor = action.payload; },
    setArrowColor(state, action: PayloadAction<string>) { state.arrowColor = action.payload; },
    setArrowBackgroundColorHover(state, action: PayloadAction<string>) { state.arrowBackgroundColorHover = action.payload; },
    setArrowColorHover(state, action: PayloadAction<string>) { state.arrowColorHover = action.payload; },
    setPaginationColor(state, action: PayloadAction<string>) { state.paginationColor = action.payload; },

    resetLayoutState() { return initialState; }
  }
});

export const {
  setLayout, setFullWidth, setCustomWidth, setReviewsPerPage, setReviewsPerPageMobile, setReviewsSpacing,
  setShowLoadMoreButton, setWidgetTitleEnabled, setTitle, setCaption,
  setBold, setItalic, setReviewStyle, setShowReviewerName, setShowVerifiedBadge, setShowReviewerPicture,
  setShowCaption, setShowDate, setShowRating, setShowImages, setShowLogo,
  setReviewTextFullOrShort, setTextLength, setAlignCardsByHeight,
  setColorScheme, setAccentColor, setFont,
  setBackgroundColor, setTitleColor, setCaptionColor, setLinkColor, setRatingColor,
  setReviewBackgroundColor, setReviewOutlineColor, setReviewTextColor, setReadMoreColor, setReviewNameColor,
  setArrowBackgroundColor, setArrowColor, setArrowBackgroundColorHover, setArrowColorHover, setPaginationColor,
  resetLayoutState
} = layoutSlice.actions;

export default layoutSlice.reducer;
