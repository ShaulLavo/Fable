export interface Restaurants {
	created: Created
	expires_in_seconds: number
	filtering: RestaurantsFiltering
	name: string
	page_title: string
	sections: Section[]
	show_large_title: boolean
	show_map: boolean
	sorting: RestaurantsSorting
	track_id: string
}

export interface Created {
	$date: number
}

export interface RestaurantsFiltering {
	filters: SortableElement[]
}

export interface SortableElement {
	id: string
	name: string
	type: string
	values?: Value[]
}

export interface Value {
	id: string
	name: string
}

export interface Section {
	content_id: string
	content_type?: ContentType
	end_of_section?: EndOfSection
	hide_delivery_info: boolean
	items: Item[]
	link?: Link
	name: string
	template: string
	title: string
}

export enum ContentType {
	Venue = 'venue',
	VenueCategory = 'venue_category',
	VenueCategoryList = 'venue_category_list'
}

export interface EndOfSection {
	link: Link
	type: string
}

export interface Link {
	target: string
	target_sort: TargetSort
	target_title: string
	telemetry_object_id?: string
	title: string
	type: Type
	view_name: ContentType
}

export enum TargetSort {
	DeliversTo = 'delivers-to'
}

export enum Type {
	CategoryList = 'category-list',
	URL = 'url',
	VenuePage = 'venue-page'
}

export interface Item {
	content_id?: string
	description?: string
	image: Image
	link: Link
	quantity?: number
	quantity_str?: string
	telemetry_object_id: string
	template: ItemTemplate
	title: string
	track_id: string
	advertising_badge?: AdvertisingBadge
	advertising_metadata?: AdvertisingMetadata
	filtering?: ItemFiltering
	sorting?: ItemSorting
	telemetry_venue_badges?: TelemetryVenueBadge[]
	venue?: Venue
	overlay?: Overlay
	overlay_v2?: OverlayV2
}

export interface AdvertisingBadge {
	label: Label
}

export enum Label {
	Sponsored = 'Sponsored'
}

export interface AdvertisingMetadata {
	ad_campaign_type: AdCampaignType
	ad_group_id: string
	auction_id: string
	campaign_id: string
	is_cpg: string
	venue_id: string
}

export enum AdCampaignType {
	SponsoredListing = 'sponsored-listing'
}

export interface ItemFiltering {
	filters: PurpleFilter[]
}

export interface PurpleFilter {
	id: TitleIcon
	values: string[]
}

export enum TitleIcon {
	PriceRange = 'price-range',
	Primary = 'primary',
	WoltPlus = 'wolt-plus'
}

export interface Image {
	blurhash: string
	url: string
}

export enum Overlay {
	Closed = 'Closed',
	TemporarilyOffline = 'Temporarily offline'
}

export interface OverlayV2 {
	icon?: OverlayV2Icon
	primary_text: PrimaryText
	secondary_text?: string
	telemetry_status: TelemetryStatus
	variant: OverlayV2Variant
}

export enum OverlayV2Icon {
	Clock = 'clock'
}

export enum PrimaryText {
	Opens600PM = 'Opens 6:00 PM',
	Opens730PM = 'Opens 7:30 PM',
	Opens815PM = 'Opens 8:15 PM',
	Opens830PM = 'Opens 8:30 PM',
	Opens900PM = 'Opens 9:00 PM',
	OpensTomorrow1030AM = 'Opens tomorrow 10:30 AM',
	OpensTomorrow1100AM = 'Opens tomorrow 11:00 AM',
	OpensTomorrow1130AM = 'Opens tomorrow 11:30 AM',
	OpensTomorrow1200PM = 'Opens tomorrow 12:00 PM',
	OpensTomorrow745AM = 'Opens tomorrow 7:45 AM',
	OpensTomorrow800AM = 'Opens tomorrow 8:00 AM',
	OpensTomorrow830AM = 'Opens tomorrow 8:30 AM',
	ScheduleOrder = 'Schedule order',
	TemporarilyOffline = 'Temporarily offline'
}

export enum TelemetryStatus {
	Closed = 'closed',
	ScheduleOrderDate = 'schedule_order__date',
	ScheduledOrderHour = 'scheduled_order__hour',
	ScheduledOrderTemporarilyOffline = 'scheduled_order__temporarily_offline',
	ScheduledOrderTomorrow = 'scheduled_order__tomorrow',
	ScheduledOrderWeekday = 'scheduled_order__weekday',
	TemporarilyOffline = 'temporarily_offline'
}

export enum OverlayV2Variant {
	Footer = 'footer',
	Full = 'full'
}

export interface ItemSorting {
	sortables: Sortable[]
}

export interface Sortable {
	id: ID
	value: number
}

export enum ID {
	DeliveryEstimate = 'delivery-estimate',
	DeliveryPrice = 'delivery-price',
	Distance = 'distance',
	PreparationEstimate = 'preparation-estimate',
	Rating = 'rating'
}

export enum TelemetryVenueBadge {
	ManuallyCurated = 'manually_curated',
	New = 'new',
	Promotions = 'promotions'
}

export enum ItemTemplate {
	SquareTitleBottom = 'square-title-bottom',
	VenueLarge = 'venue-large'
}

export interface Venue {
	address: string
	badges: any[]
	badges_v2: BadgesV2[]
	categories: any[]
	city: string
	country: Country
	currency: Currency
	delivers: boolean
	delivery_highlight: boolean
	delivery_icon?: DeliveryIconEnum
	delivery_price: DeliveryPrice
	delivery_price_highlight: boolean
	delivery_price_int?: number
	estimate: number
	estimate_box?: EstimateBox
	estimate_range?: EstimateRange
	favourite: boolean
	franchise: string
	icon?: DeliveryIconEnum
	id: string
	location: number[]
	name: string
	online: boolean
	price_range: number
	product_line: ProductLine
	promotions: BadgesV2[]
	rating?: Rating
	short_description?: string
	show_wolt_plus: boolean
	slug: string
	tags: string[]
	title_icon?: TitleIcon
	venue_preview_items: VenuePreviewItem[]
	brand_image?: Image
}

export interface BadgesV2 {
	text: Text
	variant: BadgesV2Variant
	icon?: BadgesV2Icon
}

export enum BadgesV2Icon {
	CouponFill = 'coupon-fill'
}

export enum Text {
	DeliveryByDominoS = "Delivery By Domino's",
	Kosher = 'KOSHER',
	Koshr = 'KOSHR',
	New = 'New',
	TextKosher = 'Kosher',
	The0DeliveryFee = '0 ₪ delivery fee',
	The10OffUpTo50 = '10% off (up to 50 ₪)'
}

export enum BadgesV2Variant {
	Discount = 'discount',
	Primary = 'primary',
	Secondary = 'secondary'
}

export enum Country {
	ISR = 'ISR'
}

export enum Currency {
	Ils = 'ILS'
}

export enum DeliveryIconEnum {
	Bike = 'bike'
}

export enum DeliveryPrice {
	The000 = '₪0.00',
	The1200 = '₪12.00',
	The1400 = '₪14.00',
	The1800 = '₪18.00',
	The2000 = '₪20.00',
	The2200 = '₪22.00',
	The2400 = '₪24.00'
}

export interface EstimateBox {
	subtitle: Subtitle
	template: EstimateBoxTemplate
	title?: EstimateRange
}

export enum Subtitle {
	Closed = 'Closed',
	Min = 'min'
}

export enum EstimateBoxTemplate {
	Closed = 'closed',
	Estimate = 'estimate'
}

export enum EstimateRange {
	The2535 = '25-35',
	The3040 = '30-40',
	The3545 = '35-45',
	The4050 = '40-50',
	The4555 = '45-55',
	The5060 = '50-60',
	The5565 = '55-65',
	The6070 = '60-70',
	The6575 = '65-75',
	The7080 = '70-80'
}

export enum ProductLine {
	Restaurant = 'restaurant'
}

export interface Rating {
	rating: number
	score: number
	volume: number
}

export interface VenuePreviewItem {
	currency: Currency
	id: string
	image: Image
	name: string
	price: number
	original_price?: number
}

export interface RestaurantsSorting {
	sortables: SortableElement[]
}
