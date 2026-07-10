import {
  MotionNavigationMenu,
  MotionNavigationMenuContent,
  MotionNavigationMenuIndicator,
  MotionNavigationMenuItem,
  MotionNavigationMenuLink,
  MotionNavigationMenuList,
  MotionNavigationMenuTrigger,
} from "@/components/unlumen-ui/motion-navigation-menu";
import { PROGRAMMES } from "@/data/home/programmes";

const listHighlightClassName = "bg-primary/25 rounded-lg";
const contentHighlightClassName =
  "bg-primary/25 rounded-lg";

const pgProgrammes = PROGRAMMES.filter((p) => p.level === "PG");
const pgonline = pgProgrammes.filter((p) =>
  p.slug.startsWith("online-")
);
const pgdistance = pgProgrammes.filter((p) =>
  p.slug.startsWith("distance-")
);

const ugProgrammes = PROGRAMMES.filter((p) => p.level === "UG");
const ugonline = ugProgrammes.filter((p) =>
  p.slug.startsWith("online-")
);
const ugdistance = ugProgrammes.filter((p) =>
  p.slug.startsWith("distance-")
);

const otherProgrammes = PROGRAMMES.filter((p) => p.level === "Diploma");

export default function ProgrammeMegaMenu() {
  return (
    <MotionNavigationMenu
      viewportClassName="bg-surface border-none shadow-none"
      springStiffness={350}
      springDamping={32}
    >
      <MotionNavigationMenuList highlightClassName={listHighlightClassName}>
        <MotionNavigationMenuItem value="pg">
          <MotionNavigationMenuTrigger>Post Graduation</MotionNavigationMenuTrigger>
          <MotionNavigationMenuContent
            className="bg-secondary rounded-lg"
            highlightClassName={contentHighlightClassName}
          >
            <div className="grid w-[400px] grid-cols-2 gap-1">
              {/* Left Column */}
              <div className="space-y-1">
                {pgonline.map((programme) => (
                  <MotionNavigationMenuLink
                    key={programme.slug}
                    href={`/course/${programme.slug}`}
                  >
                    <span className="text-sm font-medium">
                      {programme.name}
                    </span>

                    <span className="text-muted-foreground text-xs">
                      {programme.duration} • {programme.fee}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-1">
                {pgdistance.map((programme) => (
                  <MotionNavigationMenuLink
                    key={programme.slug}
                    href={`/course/${programme.slug}`}
                  >
                    <span className="text-sm font-medium">
                      {programme.name}
                    </span>

                    <span className="text-muted-foreground text-xs">
                      {programme.duration} • {programme.fee}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
              </div>
            </div>
          </MotionNavigationMenuContent>
        </MotionNavigationMenuItem>

        <MotionNavigationMenuItem value="ug">
          <MotionNavigationMenuTrigger>Graduation</MotionNavigationMenuTrigger>
          <MotionNavigationMenuContent
            className="bg-secondary rounded-lg"
            highlightClassName={contentHighlightClassName}
          >
            <div className="grid w-[400px] grid-cols-2 gap-1">
              {/* Left Column */}
              <div className="space-y-1">
                {ugonline.map((programme) => (
                  <MotionNavigationMenuLink
                    key={programme.slug}
                    href={`/course/${programme.slug}`}
                  >
                    <span className="text-sm font-medium">
                      {programme.name}
                    </span>

                    <span className="text-muted-foreground text-xs">
                      {programme.duration} • {programme.fee}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-1">
                {ugdistance.map((programme) => (
                  <MotionNavigationMenuLink
                    key={programme.slug}
                    href={`/course/${programme.slug}`}
                  >
                    <span className="text-sm font-medium">
                      {programme.name}
                    </span>

                    <span className="text-muted-foreground text-xs">
                      {programme.duration} • {programme.fee}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
              </div>
            </div>
          </MotionNavigationMenuContent>
        </MotionNavigationMenuItem>

        <MotionNavigationMenuItem value="others">
          <MotionNavigationMenuTrigger>Others</MotionNavigationMenuTrigger>
          <MotionNavigationMenuContent
            className="bg-secondary rounded-lg"
            highlightClassName={contentHighlightClassName}
          >
            <div className="grid w-[400px] grid-cols-2 gap-1">              
                {otherProgrammes.map((programme) => (
                  <MotionNavigationMenuLink
                    key={programme.slug}
                    href={`/course/${programme.slug}`}
                  >
                    <span className="text-sm font-medium">
                      {programme.name}
                    </span>

                    <span className="text-muted-foreground text-xs">
                      {programme.duration} • {programme.fee}
                    </span>
                  </MotionNavigationMenuLink>
                ))}
            </div>
          </MotionNavigationMenuContent>
        </MotionNavigationMenuItem>        
      </MotionNavigationMenuList>
    </MotionNavigationMenu>
  );
}