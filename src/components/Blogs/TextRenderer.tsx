import Dompurify from 'dompurify';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

function TextRenderer({ content, className }: Props) {
  const sanitizedContent = Dompurify.sanitize(content);
  const htmlContent = { __html: sanitizedContent };
  return <div dangerouslySetInnerHTML={htmlContent} className={className} />;
}

export default TextRenderer