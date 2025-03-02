import { CustomIcon, IconBaseProps } from 'solid-icons';

			type Props = Exclude<IconBaseProps, 'src'>

			const iconContent = {
			a: { fill: "currentColor", viewBox: "0 0 24 24" },
			c: '<path d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9M12 4.15 6.04 7.5 12 10.85l5.96-3.35L12 4.15M5 15.91l6 3.38v-6.71L5 9.21v6.7m14 0v-6.7l-6 3.37v6.71z" style="fill:#29b6f6"/>',
			};

			export const 3d = (props: Props) => <CustomIcon size={16} color="#2c4f7c" {...props} src={iconContent} />;